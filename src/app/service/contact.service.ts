import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Contact} from "../model/contact";
import {PageEvent} from "@angular/material/paginator";


@Injectable()
export class ContactService {

  private contactsUrl: string;

  constructor(private http: HttpClient) {
    this.contactsUrl = 'http://localhost:8080/contacts';
  }

  public findAll(request: any): Observable<PageEvent> {
    let page = request['page'];
    let size = request['size'];
    return this.http.get<PageEvent>(this.contactsUrl + '?' + 'page=' + page + '&size=' + size);
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
