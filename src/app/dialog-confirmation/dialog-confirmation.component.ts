import {Component, Inject, OnInit} from '@angular/core';
import {ContactService} from "../service/contact.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-confirmation',
  templateUrl: './dialog-confirmation.component.html',
  styleUrls: ['./dialog-confirmation.component.css']
})
export class DialogConfirmationComponent implements OnInit {

  id: string;

  constructor(private contactService: ContactService,
              @Inject(MAT_DIALOG_DATA) data) {
  this.id = data.id;
}

  ngOnInit(): void {

  }

  onClick() {
    this.contactService.delete(this.id).subscribe({
      next: () => {
        console.log('Delete successful');
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });

    window.location.reload();
  }
}
