import { generateForwardRef } from "@angular/compiler/src/render3/util";
import { User } from "./user/user.entity";

export const exampleUsers:Array<User> = [
    {id:1,firstName:"first",lastName:"last",email:"email",password:"****",checkPassword:"****",gender:"Male",edit:false},
    {id:2,firstName:"first",lastName:"last",email:"email1",password:"****",checkPassword:"****",gender:"Female",edit:false}
];