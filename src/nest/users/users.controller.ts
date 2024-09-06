import {
  Controller,
  Body,
  ValidationPipe,
  UsePipes,
  Patch, Param, BadRequestException, HttpException, HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ProblemsDto } from './dto/problems-dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @ApiOperation({ summary: 'User problems status update' })
  @ApiResponse({ status: 200, description: 'User updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @UsePipes(ValidationPipe)
  @Patch(':id/problems')
  async updateProblemsStatus(@Param('id') id: number, @Body() dto: ProblemsDto): Promise<any> {
    try {
      dto.id = id;
      const user = await this.usersService.changeUserProblemsStatus(dto);
      return { user };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


}