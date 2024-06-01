import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestaurentDashComponent } from './restaurent-dash/restaurent-dash.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ClubeventsComponent } from './clubevents/clubevents/clubevents.component';
import { InternshipComponent } from './internship/internship/internship.component';
import { SessionsComponent } from './sessions/sessions/sessions.component';


const routes: Routes = [
{
  path:'',component:HomepageComponent
},
{
  path:'homepage', component:HomepageComponent
},
{
  path:'clubevents', component:ClubeventsComponent
},
// {
//   path: 'clubevents',
//   loadChildren: () => import('./clubevents/clubevents-routing.module').then(m => m.ClubeventsRoutingModule)
// },

{
  path:'internships', component:InternshipComponent
},

{
  path:'sessions', component:SessionsComponent
},

{
   path: 'login', component: LoginComponent 
},

 {
   path: 'signup', component: SignupComponent 
 }, 
 {
   path:'admin' , component: RestaurentDashComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
