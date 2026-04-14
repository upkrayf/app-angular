import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private apiUrl = '/assets/mock-data/users.json';

  constructor(private router: Router,private http: HttpClient) { }

  login(email: string, password: string): boolean {
    const mockUsers = this.http.get<UserModel[]>(this.apiUrl);
    const user = mockUsers.find(
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