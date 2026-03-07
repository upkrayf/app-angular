import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { AiAssistant } from './components/ai-assistant/ai-assistant';
import { Login } from './components/login/login';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'ai-assistant', component: AiAssistant },
    { path: 'login', component: Login },

    // Ana sayfadaki istatistikler
    { path: 'dashboard', component: Dashboard },
    { path: '**', redirectTo: 'dashboard' }
];
