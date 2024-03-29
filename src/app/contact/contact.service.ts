import { Injectable, OnDestroy } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay }      from 'rxjs/operators';

export class Contact {
  constructor(public id: number, public name: string) { }
}

const CONTACTS: Contact[] = [
  new Contact(21, 'Yasha'),
  new Contact(22, 'Iulia'),
  new Contact(23, 'Karina')
];

const FETCH_LATENCY = 500;

/** Simulate a data service that retrieves contacts from a server */

//005 For data or logic that isn't associated with a specific view, and that you want to share across components, you create a service class. A service class definition is immediately preceded by the @Injectable() decorator. The decorator provides the metadata that allows other providers to be injected as dependencies into your class.
@Injectable()
export class ContactService implements OnDestroy {

  constructor() { console.log('ContactService instance created.'); }
  ngOnDestroy() { console.log('ContactService instance destroyed.'); }

  getContacts(): Observable<Contact[]>  {
    return of(CONTACTS).pipe(delay(FETCH_LATENCY));
  }

  getContact(id: number | string): Observable<Contact> {
    const contact$ = of(CONTACTS.find(contact => contact.id === +id));
    return contact$.pipe(delay(FETCH_LATENCY));
  }
}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/