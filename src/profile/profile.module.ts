import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfileService } from "./profile.service";
import { ProfileController } from "./profile.controller";
import { User } from "src/entities/User.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [ProfileController],
    providers: [ProfileService],
    exports: [ProfileService]
})
export class ProfileModule{}