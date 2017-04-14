import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeetingRoomComponent } from './meetingrooms/meetingroom.component';
import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './loginandregistration/login.component';
import {BookingComponent} from './bookings/booking.component';
import {ProfileComponent} from './profile/profile.component'
import {AuthInterceptor} from './auth-interceptor.service';
import {CookieService} from 'angular2-cookie/services/cookies.service'

const appRoutes: Routes=[
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthInterceptor]},
  {path:'dashboard',component:MeetingRoomComponent,canActivate:[AuthInterceptor]},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,MeetingRoomComponent,LoginComponent,BookingComponent,ProfileComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthInterceptor, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
