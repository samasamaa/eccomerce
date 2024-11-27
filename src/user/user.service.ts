import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RegisterUserDto } from "src/auth/dto/register-user.dto";
import { User } from "src/entities/User.entity";
import { UserKey } from "src/entities/User.entity";
import { FindOptionsWhere, Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>
    ) {}

    find(where?: FindOptionsWhere<User>){
        return this.userRepo.find({where})
    }

    findOne(where: FindOptionsWhere<User>, select?: UserKey[]){
        return this.userRepo.findOne({where, select})
    }

    async create (params: Partial<User>){
        let checkEmail = await this.findOne({email: params.email})
        if(checkEmail){
            throw new ConflictException('User with this email already exists')
        }
        let user = this.userRepo.create(params)
        await user.save();
        return user;
    }

}