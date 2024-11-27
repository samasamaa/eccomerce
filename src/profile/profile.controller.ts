import { ProfileService } from "./profile.service";
import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/guards/auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@Controller('profile')
@ApiTags('Profile')
@ApiBearerAuth()
export class ProfileController {
    constructor(private profileService: ProfileService) { }

    @Get()
    @UseGuards(AuthGuard)
    myProfile(@Req() req: any) {
        return this.profileService.findOne(req.userId)
    }
}

