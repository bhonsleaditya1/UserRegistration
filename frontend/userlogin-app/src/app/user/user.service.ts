import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { User } from './user.entity';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    uri = "http://localhost:3000/api/v1/users/"
    constructor(private http: HttpClient) {}
    
    public getAllUsers():Observable<User[]>{
        return this.http.get<User[]>(this.uri);
    }

    public getUserById(id:string):Observable<User>{
        return this.http.get<User>(this.uri+"/"+id);
    }

    public postUser(user:User){
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(user);
        console.log(this.uri+"signup",user,body)
        return this.http.post(this.uri+"signup",body,{"headers":headers});
    }

    public updateUser(user:User,id:number):Observable<User>{
        const headers = { 'content-type': 'application/json'}  
        const body =JSON.parse(JSON.stringify(user));
        delete body['password'];
        delete body['checkPassword'];
        console.log(this.uri+id,user,body)
        return this.http.patch<User>(this.uri+id,body,{"headers":headers});
    }

    public deleteUser(id:number):Observable<any>{
        console.log(this.uri+id)
        return this.http.delete(this.uri+id);
    }
}