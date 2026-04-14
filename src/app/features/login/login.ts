import { Component } from '@angular/core';
import { Auth } from '../../core/services/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login{
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: Auth,private router: Router) { }

  onLogin(): void {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'E-posta ve şifre boş olamaz.';
      return;
    }

    const success = this.authService.login(this.email, this.password);

    if (!success) {
      this.errorMessage = 'E-posta veya şifre hatalı.';
    }
  }

  fillDemo(role: 'admin' | 'corporate' | 'individual'): void {
    const accounts = {
      admin: { email: 'admin@test.com', password: '123' },
      corporate: { email: 'corporate@test.com', password: '123' },
      individual: { email: 'individual@test.com', password: '123' }
    };
    this.email = accounts[role].email;
    this.password = accounts[role].password;
  }
}