import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private mockUsers = [
    { email: 'admin@test.com', password: '123', role: 'ADMIN' },
    { email: 'corporate@test.com', password: '123', role: 'CORPORATE' },
    { email: 'individual@test.com', password: '123', role: 'INDIVIDUAL' }
  ];

  constructor(private router: Router) { }

  login(email: string, password: string): boolean {
    const user = this.mockUsers.find(
      u => u.email === email && u.password === password
    );

    if (!user) return false;

    localStorage.setItem('token', 'mock-token-' + user.role);
    localStorage.setItem('role', user.role);

    switch (user.role) {
      case 'ADMIN': this.router.navigate(['/admin/dashboard']); break;
      case 'CORPORATE': this.router.navigate(['/corporate/dashboard']); break;
      case 'INDIVIDUAL': this.router.navigate(['/individual/dashboard']); break;
    }

    return true;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  isAdmin(): boolean { return this.getRole() === 'ADMIN'; }
  isCorporate(): boolean { return this.getRole() === 'CORPORATE'; }
  isIndividual(): boolean { return this.getRole() === 'INDIVIDUAL'; }
}