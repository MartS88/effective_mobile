import { User } from './user-model';
import { InjectModel } from '@nestjs/sequelize';
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { ProblemsDto } from './dto/problems-dto';


@Injectable()
export class UsersService {


  constructor(
    @InjectModel(User) private userRepository: typeof User,
  ) {
  }

  async changeUserProblemsStatus(dto: ProblemsDto) {
    try {
      const user = await this.userRepository.findOne({
        where: { id: dto.id },
        include: { all: true }
      });
      if (!user) {
        throw new BadRequestException('User not found');
      }
      user.problems = dto.problems
      await user.save()
      const usersWithTrueFlag = await this.userRepository.count({
        where: { problems: true },
      });
      return {data:{id:user.id,name:user.name,problems:user.problems},usersWithTrueFlag}

    } catch (error) {
      console.error('Error updating problems status:', error);
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to update problem status');
    }
  }





}
