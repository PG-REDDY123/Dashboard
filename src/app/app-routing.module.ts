import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { MaincomponentComponent } from './dashboard/maincomponent/maincomponent.component';

const routes: Routes = [
  {path:"main",component:MaincomponentComponent},
  {path:"signup ",component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
