import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Proveedores } from './proveedores/proveedores';

export const routes: Routes = [
    { path: '', component: Login },
    { path: 'home', component: Home},
    { path: 'proveedores', component: Proveedores },
];
