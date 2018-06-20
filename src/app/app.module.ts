import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { LogoutComponent } from './logout/logout.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../app/interceptors/tokeninterceptor';
import { OfficeComponent } from './office/office.component';
import { VehicletypeComponent } from './vehicletype/vehicletype.component';
import { ManagementComponent } from './management/management.component';
import { AdministrationComponent } from './administration/administration.component';
import { PriceManagementComponent } from './price-management/price-management.component';

const  Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path : "logout", 
    component: LogoutComponent,
  },
  {
    path: "image/:id",
    component: ImageDetailComponent,
  },
  {
    path: "addvehicle",
    component: VehicleComponent,
  },
  {
    path: "addservice",
    component: ServiceComponentComponent,
  },
  {
    path: "addoffice",
    component: OfficeComponent,
  },
  {
    path: "addvehicletype",
    component: VehicletypeComponent,
  },
  {
    path: "management",
    component: ManagementComponent,
  },
  {
    path: "administration",
    component: AdministrationComponent,
  },
  {
    path: "changeprice",
    component: PriceManagementComponent,
  },
  {
    path: "other",
    redirectTo: "home"
  }  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    GalleryComponent,
    NavbarComponent,
    ImageDetailComponent,
    LogoutComponent,
    VehicleComponent,
    ServiceComponentComponent,
    OfficeComponent,
    VehicletypeComponent,
    ManagementComponent,
    AdministrationComponent,
    PriceManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(Routes),
    FormsModule,
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
