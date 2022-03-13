import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


@NgModule({
  declarations: [
    RegisterComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RegisterComponent,
    ResetPasswordComponent
  ]
})
export class AuthModule { }
