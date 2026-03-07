import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { AiAssistant } from './components/ai-assistant/ai-assistant';
import { Login } from './components/login/login';
import { ProductsList } from './components/products-list/products-list';
import { ProductDetails } from './components/product-details/product-details';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'ai-assistant', component: AiAssistant },
    { path: 'login', component: Login },
    { path: 'products', component: ProductsList },
    
    { path: 'product/:id', component: ProductDetails },

    { path: 'dashboard', component: Dashboard },
    { path: '**', redirectTo: 'dashboard' }
];
