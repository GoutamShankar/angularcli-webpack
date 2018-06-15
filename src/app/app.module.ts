import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [

        AppComponent,

        TopNavigationComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
