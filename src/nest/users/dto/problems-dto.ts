import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsBoolean } from "class-validator";

export class ProblemsDto {

    @ApiProperty({ example: 1, description: 'Unique identifier' })
    id: number;

    @ApiProperty({ example: false, description: 'Indicates status of problem' })
    @IsBoolean({ message: 'Problems must be a boolean' })
    @IsNotEmpty({ message: 'Problems cannot be empty' })
    readonly problems: false;
}
