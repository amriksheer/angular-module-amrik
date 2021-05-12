// Exact copy except import UserService from greeting
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Contact, ContactService } from './contact.service';
import { UserService } from '../greeting/user.service';


//selector: A CSS selector that tells Angular to create and insert an instance of this component wherever it finds the corresponding tag in template HTML

//providers: An array of providers for services that the component requires.

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
//006 Angular creates, updates, and destroys components as the user moves through the application.
//006 Component metadata
//The @Component decorator identifies the class immediately below it as a component class, and specifies its metadata.
export class ContactComponent implements OnInit {
  contact: Contact;
  contacts: Contact[];

  msg = 'Loading contacts ...';
  userName = '';

  contactForm = this.fb.group({
    name: ['', Validators.required]
  });

  constructor(
    private contactService: ContactService,
    userService: UserService,
    private fb: FormBuilder
  ) {
    this.userName = userService.userName;
  }

  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    this.contactService.getContacts().subscribe(contacts => {
      this.msg = '';
      this.contacts = contacts;
      this.contact = contacts[0];
      this.contactForm.get('name').setValue(this.contact.name);
    });
  }

  next() {
    let ix = 1 + this.contacts.indexOf(this.contact);
    if (ix >= this.contacts.length) {
      ix = 0;
    }
    this.contact = this.contacts[ix];
    console.log(this.contacts[ix]);
  }

  onSubmit() {
    let newName = this.contactForm.get('name').value;
    this.displayMessage('Saved ' + newName);
    this.contact.name = newName;
  }

  newContact() {
    this.displayMessage('New contact');
    this.contactForm.get('name').setValue('');
    this.contact = { id: 42, name: '' };
    this.contacts.push(this.contact);
  }

  /** Display a message briefly, then remove it. */
  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => (this.msg = ''), 1500);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
