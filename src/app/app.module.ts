import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [

        AppComponent,

        TopNavigationComponent,

        LandingPageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
