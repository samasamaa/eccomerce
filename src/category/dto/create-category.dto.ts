import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, Length } from "class-validator";

export class CreateCategoryDto{
    @Type()
    @IsString()
    @ApiProperty()
    @Length(3, 50)
    name: string;
}