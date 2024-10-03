import { Component } from '@angular/core';

export interface Contact {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-area',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css'],
})
export class MainAppComponent {
  contactList: Contact[] = [];
  sortedContacts: Contact[] = [];
  firstName = 'Coder';
  lastName = 'Byte';
  phoneNumber = '8885559999';

  addContact(fn: string, ln: string, pn: string) {
    this.contactList.push({
      firstName: fn,
      lastName: ln,
      phoneNumber: pn,
    });
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = '';
    this.contactsSort();
  }

  contactsSort() {
    this.sortedContacts = this.contactList.sort(function (
      a: Contact,
      b: Contact
    ) {
      return a.lastName.localeCompare(b.lastName);
    });
  }
}
