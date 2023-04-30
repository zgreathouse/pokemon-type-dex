import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './features/nav/nav.component';
import { FooterComponent } from './ui/footer/footer.component';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, FooterComponent, NavComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
