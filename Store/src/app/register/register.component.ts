// register.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {}; // Об'єкт для збереження даних користувача

  onSubmit() {
    // Тут ви можете додати логіку для обробки подання форми, наприклад, відправка на сервер
    console.log('User submitted:', this.user);
  }
}
