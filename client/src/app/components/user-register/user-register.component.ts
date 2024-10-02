import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css',
})
export class UserRegisterComponent {
  form: any = {
    name: null,
    userName: null,
    password: null,
  };

  isSuccessful = false;
  isFailed = false;
  errorMessage = '';

  constructor(private userService: UserService) {}

  onSubmit(){
    const { name, userName, password } = this.form;
    this.userService.register({ name, userName, password }).subscribe({
      next: ()=> {
        this.isSuccessful = true;
        this.isFailed = false;
        window.location.reload();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    });
  }
}
