import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CardsComponent } from './cards/cards.component';
import { PaymentsComponent } from './payments/payments.component';



@NgModule({



  declarations: [
    AppComponent,
    MainMenuComponent,
    LoginComponent,
    LandingPageComponent,
    AccountsComponent,
    CardsComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}

