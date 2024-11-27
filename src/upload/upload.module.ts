import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ImageEntity } from "src/entities/Image.entity";
import { UploadController } from "./upload.controller";
import { UploadService } from "./upload.service";


@Module({
    imports: [TypeOrmModule.forFeature([ImageEntity])],
    controllers: [UploadController],
    providers: [UploadService]
})
export class UploadModule{}