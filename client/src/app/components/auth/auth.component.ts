import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  form: any = {
    userName: null,
    password: null
  };
  isLoginSuccessful = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private userService: UserService,private storageService: StorageService){
    
  }

  onSubmit(){
    const { userName, password } = this.form;
    this.userService.auth(userName,password).subscribe({
      next: (data)=> {
        this.isLoginSuccessful = true;
        this.isLoginFailed = false;
        this.storageService.saveUser(data);
        window.location.reload();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

}
