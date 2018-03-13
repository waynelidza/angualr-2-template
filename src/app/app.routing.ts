import {MainMenuComponent} from './main-menu/main-menu.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {AccountsComponent} from './accounts/accounts.component';
import {AppComponent} from './app.component';
import {PaymentsComponent} from './payments/payments.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  },

  { path: 'login', component: LoginComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'app', component: AppComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'main', component: MainMenuComponent }];
export const routing = RouterModule.forRoot(routes);
