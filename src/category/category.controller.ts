import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CategoryService } from "./category.service";
import { AuthGuard } from "src/guards/auth.guard";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UserRoles } from "src/common/enum/user-roles";
import { Roles } from "src/common/decorators/roles.decorator";

@Controller('category')
@ApiTags('Category')
export class CategoryController{
    constructor(
        private categoryService: CategoryService
    ){}

    @Get()
    list(){
        return this.categoryService.find();
    }

    @Get(':id')
    item(@Param('id') id: number){
        return this.categoryService.findOne({ where: { id } });
    }

    @Post()
    @ApiBearerAuth()
    @Roles(UserRoles.ADMIN)
    @UseGuards(AuthGuard)
    create(@Body() body: CreateCategoryDto){
        return this.categoryService.create(body)
    }

    @Delete(':id')
    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Roles(UserRoles.ADMIN)
    delete(@Param('id') id: number) {
        return this.categoryService.delete(id)
    }
}
