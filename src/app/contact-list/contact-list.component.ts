import { Component, OnInit } from '@angular/core';
import {Contact} from "../model/contact";
import {ContactService} from "../service/contact.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogConfirmationComponent} from "../dialog-confirmation/dialog-confirmation.component";
import {DialogUpdateConfirmationComponent} from "../dialog-update-confirmation-component/dialog-update-confirmation.component";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];
  isDeleted = false;
  totalElements = 0;

  constructor(private contactService: ContactService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    const request = {};
    request['page'] = 0;
    request['size'] = 5;
    this.contactService.findAll(request).subscribe(data => {
      this.contacts = data['content'];
      this.totalElements = data['totalElements'];
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

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.contactService.findAll(request).subscribe(data => {
      this.contacts = data['content'];
      this.totalElements = data['totalElements'];
    });
  }
}
