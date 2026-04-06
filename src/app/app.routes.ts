import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from './core/services/auth';
import { Router } from '@angular/router';

// Basit bir Guard fonksiyonu (Ayrı dosyaya da alabilirsin)
const roleGuard = (allowedRole: string) => {
    return () => {
        const auth = inject(Auth);
        const router = inject(Router);
        if (auth.isLoggedIn() && auth.getRole() === allowedRole) {
            return true;
        }
        return router.parseUrl('/login'); // Yetki yoksa login'e at
    };
};

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login').then(m => m.Login)
    },
    {
        path: 'admin/dashboard',
        loadComponent: () => import('./admin/dashboard/dashboard').then(m => m.AdminDashboard),
        canActivate: [roleGuard('ADMIN')]
    },
    {
        path: 'corporate/dashboard',
        loadComponent: () => import('./corporate/dashboard/dashboard').then(m => m.CorporateDashboard),
        canActivate: [roleGuard('CORPORATE')]
    },
    {
        path: 'individual/dashboard',
        loadComponent: () => import('./individual/dashboard/dashboard').then(m => m.IndividualDashboard),
        canActivate: [roleGuard('INDIVIDUAL')]
    }
];