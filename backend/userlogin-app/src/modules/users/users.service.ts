import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/constants';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User) { }

    async create(user: UserDto) {
        return await this.userRepository.create<User>(user,{});
    }

    async findAll(){
        return await this.userRepository.findAll<User>();
    }

    async findOneByEmail(email: string){
        return await this.userRepository.findOne<User>({ where: { email } });
    }

    async update(user: UserDto,id:number){
        return await this.userRepository.update<User>(user,{where: {id},individualHooks:true});
    }

    async delete(id: number){
        return await this.userRepository.destroy<User>({where:{id}})
    }

    async findOneById(id: number){
        return await this.userRepository.findOne<User>({ where: { id } });
    }
}
