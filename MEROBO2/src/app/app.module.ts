import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeetingRoomComponent } from './meetingrooms/meetingroom.component';
import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './loginandregistration/login.component';

const appRoutes: Routes=[
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'home',component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,MeetingRoomComponent,LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }