import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileService } from './services/profile.service'

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProfileService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
