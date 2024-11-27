import { ApiProperty } from "@nestjs/swagger";
import { Type, Transform } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class GetProductDto {
    @Type()
    @ApiProperty({default:'iphone', required: false})
    @IsOptional()
    @IsString()
    name: string;

    @Type()
    @ApiProperty({default: 10, required: false})
    @IsOptional()
    @IsNumber({}, {each: true})
    minPrice: number;

    @Type()
    @ApiProperty({default: 30, required: false})
    @IsOptional()
    @IsNumber({}, {each: true})
    maxPrice: number;

    @Type()
    @ApiProperty({default: '1,2', type: String, required: false})
    @IsOptional()
    @Transform(({value}) => value && value?.split(','))
    categories: number[]

    @Type()
    @ApiProperty({default: 5, required: false})
    @IsOptional()
    @IsNumber()
    limit:number

    @Type()
    @ApiProperty({default: 0, required: false})
    @IsOptional()
    @IsNumber()
    page:number
}