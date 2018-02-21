import {MainMenuComponent} from './main-menu/main-menu.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainMenuComponent }];
export const routing = RouterModule.forRoot(routes);
