import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {Contact} from "../model/contact";


@Injectable()
export class ContactService {

  private contactsUrl: string;

  constructor(private http: HttpClient) {
    this.contactsUrl = 'http://localhost:8080/contacts';
  }

  public findAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl);
  }

  public save(contact: Contact) {
    return this.http.post<Contact>(this.contactsUrl, contact);
  }

  public delete(id: string) {
    return this.http.delete(this.contactsUrl+'/'+id);
  }

  public update(contact: Contact) {
    return this.http.put(this.contactsUrl+'/'+ contact.id, contact);
  }


}
