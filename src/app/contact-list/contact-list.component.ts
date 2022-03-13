import { Component, OnInit } from '@angular/core';
import {Contact} from "../model/contact";
import {ContactService} from "../service/contact.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogConfirmationComponent} from "../dialog-confirmation/dialog-confirmation.component";
import {DialogUpdateConfirmationComponent} from "../dialog-update-confirmation-component/dialog-update-confirmation.component";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];
  isDeleted = false;

  constructor(private contactService: ContactService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.contactService.findAll().subscribe(data => {
      this.contacts = data;
    });
  }

  openDialog(id: string) {
    this.dialog.open(DialogConfirmationComponent, {
      height: '150px',
      width: '270px',
      data: {
        id: id
      }
    });
  }

  openDialogUpdate(contact: Contact) {
    this.dialog.open(DialogUpdateConfirmationComponent, {
      height: '350px',
      width: '275px',
      data: {
        contact: contact
      }
    });
  }
}
