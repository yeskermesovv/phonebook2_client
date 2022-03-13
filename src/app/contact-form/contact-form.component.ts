import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Contact} from "../model/contact";
import {ContactService} from "../service/contact.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contact: Contact;
  phoneMask = ['+', /\d/, '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService) {
    this.contact = new Contact();
  }

  onSubmit() {
    this.contactService.save(this.contact).subscribe(() => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/contacts']);
  }
}
