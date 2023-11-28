// login.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor() { }

  login(): void {
    // Реалізуйте логіку авторизації тут
    console.log('Login button clicked');
  }
}
