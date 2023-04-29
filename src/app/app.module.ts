import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, NavComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
