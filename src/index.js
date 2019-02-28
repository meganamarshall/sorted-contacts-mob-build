import contacts from '../data/contacts.js';
import loadContacts from './contacts-component.js';
import loadSort from '../src/sort-component.js';
import sortContacts from './sort-contacts.js';

loadContacts(contacts);

loadSort(sortChoices => {
    const sortedContacts = sortContacts(contacts, sortChoices);
    loadContacts(sortedContacts);
});

