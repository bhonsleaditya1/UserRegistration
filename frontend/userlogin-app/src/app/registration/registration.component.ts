import { Component, OnInit } from '@angular/core';
import { registration } from './registration.data';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { UserComponent } from '../user/user.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {  
  forms = registration;
  user:User
  ngForm:FormGroup;
  constructor(private userComponent: UserComponent,private fb: FormBuilder){
    this.user = new User()
    this.ngForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['',Validators.required],
      gender: ['', Validators.required ],
      checkPassword:['',Validators.required],
    });
  }
  submitted = false;

  onSubmit() { this.submitted = true; }
  
  ngOnInit(): void {
  }
  
  addUser(){
    this.userComponent.addUser(this.user);
  }  

}
