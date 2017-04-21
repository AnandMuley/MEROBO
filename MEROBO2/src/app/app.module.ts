import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MeetingRoomComponent } from './meetingrooms/meetingroom.component';
import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './loginandregistration/login.component';
import {BookingComponent} from './bookings/booking.component';
import {ProfileComponent} from './profile/profile.component'
import {AuthInterceptor} from './auth-interceptor.service';
import {CookieService} from 'angular2-cookie/services/cookies.service'
import {HttpModule,JsonpModule} from '@angular/http'
import {LoginService} from './loginandregistration/login.service'
import {BookingService} from './booking.service';
import { DashboardComponent } from './dashboard/dashboard.component'

const appRoutes: Routes=[
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthInterceptor]},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthInterceptor]},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,MeetingRoomComponent,LoginComponent,BookingComponent,ProfileComponent, DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [AuthInterceptor, CookieService,LoginService,BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
