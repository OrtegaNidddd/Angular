import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Card } from './card/card';
import { Login } from './login/login';

export const routes: Routes = [
    { path: '', component: Login },
    { path: 'home', component: Home},
    { path: 'card', component: Card},
];
