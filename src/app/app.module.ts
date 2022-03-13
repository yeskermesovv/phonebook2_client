import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {ContactService} from "./service/contact.service";
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';
import {MatButtonModule} from "@angular/material/button";
import {DialogUpdateConfirmationComponent} from "./dialog-update-confirmation-component/dialog-update-confirmation.component";
import {MatInputModule} from "@angular/material/input";
import { TextMaskModule } from 'angular2-text-mask';
import {AuthModule} from "./auth/auth.module";


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactFormComponent,
    DialogConfirmationComponent,
    DialogUpdateConfirmationComponent
  ],
  entryComponents: [DialogConfirmationComponent, DialogUpdateConfirmationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    TextMaskModule,
    AuthModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
