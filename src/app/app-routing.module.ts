import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactListComponent} from "./contact-list/contact-list.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {RegisterComponent} from "./auth/components/register/register.component";
import {ResetPasswordComponent} from "./auth/components/reset-password/reset-password.component";

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'add-contact', component: ContactFormComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'reset-password', component: ResetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
