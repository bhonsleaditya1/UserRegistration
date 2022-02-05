import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { exampleUsers } from '../example.users';
import { User } from '../user/user.entity';
import {display} from './display.data';
import { UserService } from '../user/user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  forms = display;
  users:User[]
  search:any = {};

  constructor(private usercomponent:UserComponent) {
      this.users = usercomponent.users
   }

  ngOnInit(): void {
  } 

  async refreshData(){
    this.users = await this.usercomponent.refreshData();
  }
  async deleteUser(user:User){
    if(user.id!=null){
      await this.usercomponent.deleteUser(user.id);
      this.toggle(user)
    }
  }

  async editUser(user:User){
    await this.usercomponent.editUser(user);
    this.toggle(user)
  }

  toggle(user:User){
    user.edit = !user.edit;
  }

  sort(column:string){

  }
}
