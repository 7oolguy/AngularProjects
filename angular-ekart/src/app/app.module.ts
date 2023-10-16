import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';
import { LogoHeaderComponent } from './header/logo-header/logo-header.component';
import { NavMainHeaderComponent } from './header/main-header/nav-main-header/nav-main-header.component';
import { BodyComponent } from './body/body.component';
import { ButtonBodyComponent } from './body/button-body/button-body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainHeaderComponent,
    LogoHeaderComponent,
    NavMainHeaderComponent,
    BodyComponent,
    ButtonBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
