import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../../core/services/auth'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  constructor(
    private authService: Auth,
    private router: Router
  ) { }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  logout(): void {
    this.authService.logout();
  }
}