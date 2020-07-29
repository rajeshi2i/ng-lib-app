import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, outlet: 'elementA' },
  { path: 'profile', component: ProfileComponent, outlet: 'elementA' },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterTestingModule.withRoutes(routes),
  ],
  exports: [RouterTestingModule]
})
export class AppRoutingModule { }
