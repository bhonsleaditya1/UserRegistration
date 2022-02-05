import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { DoesUserExist } from 'src/core/guards/doesUserExist.guard';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @UseGuards(DoesUserExist)
    @Post('signup')
    async signUp(@Body() user: UserDto) {
        return await this.userService.create(user);
    }

    @Get('')
    async getAllUsers(){
        return await this.userService.findAll();
    }

    @Get(':id')
    async getUserById(@Param() param){
        return await this.userService.findOneById(parseInt(param.id));
    }
    
    @Patch(':id')
    async updateUser(@Body() user: UserDto,@Param() param){
        return await this.userService.update(user,parseInt(param.id));
    }

    @Delete(':id')
    async deleteUser(@Param() param){
        return await this.userService.delete(parseInt(param.id));
    }

}
