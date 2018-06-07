import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const  Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "other",
    redirectTo: "home"
  }  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
