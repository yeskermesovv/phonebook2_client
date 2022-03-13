import {Component, Inject, OnInit} from '@angular/core';
import {ContactService} from "../service/contact.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Contact} from "../model/contact";

@Component({
  selector: 'app-dialog-update-confirmation',
  templateUrl: './dialog-update-confirmation.component.html',
  styleUrls: ['./dialog-update-confirmation.component.css']
})
export class DialogUpdateConfirmationComponent implements OnInit {

  contact: Contact;
  phoneMask = ['+', /\d/, '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(private contactService: ContactService,
              @Inject(MAT_DIALOG_DATA) data) {
    this.contact = data.contact;
  }

  ngOnInit(): void {

  }

  onClick(contact: Contact) {
    this.contactService.update(contact).subscribe({
      next: () => {
        console.log('Update successful');
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
    window.location.reload();
  }
}
