import { Injectable, OnInit } from "@angular/core";
import { map } from "rxjs";
import { User } from "./user.entity";
import { UserService } from "./user.service";


@Injectable({
    providedIn: 'root'
})
export class UserComponent{
    users:User[]

    constructor(private userService:UserService){
        this.users = []
    }

    async refreshData(){
        await this.userService.getAllUsers()
        .pipe(map(data => {
            return data.map(item => {
            //console.log(item)
            const user: User = {
                id:item.id,
                firstName: item.firstName,
                lastName: item.lastName,
                email: item.email,
                password: "",
                checkPassword: "",
                gender: item.gender,
                edit: false
            }
            //console.log(user)
            return user
            })
        }))
        .subscribe(data=>this.users=data);
        return this.users;
    }

    async addUser(user:User){
        console.log(user);
        await this.userService.postUser(user).subscribe(data=>{
            console.log(data);
            this.refreshData();   
        });
        alert("User saved!!!");    
    }

    async deleteUser(id:number){
        await this.userService.deleteUser(id).subscribe(data=>{
            console.log(data)
            this.refreshData();  
        });
    }
    async editUser(user:User){
        await this.userService.updateUser(user,user.id).subscribe(data=>{
            console.log(data)
            this.refreshData();  
        });
    }
}