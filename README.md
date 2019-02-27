# Sorted Contacts

Render a table of contacts and allow user to specify sort order

## Contacts Data

The file `data/contacts.js` contains an array of 50 faux contacts

## Process

1. DDD `makeContactRow` template function
1. Add Contacts Component
    1. File `contacts-component.js`
    1. Move `makeContactRow` function here (named export for testing);
    1. Reference (make a variable) for `<tbody>` where rows will go
    1. exports default `loadContacts(contacts)` function
    1. `loadContacts` function loops contacts and creates a table row for each one (don't worry about clearing rows yet).
1. Load Contacts Component in `index.js`
    1. import `contacts`
    1. import `loadContacts`
    1. call `loadContacts` with `contacts`
1. TDD `sort-contacts` function
    1. takes array of contacts and sort object with field
    1. returns sorted array
    1. when done, move to `sort-contacts.js` file
1. Add Sort Component
    1. File `sort-component.js`
    1. Reference (make a variable for) `<select>` element
    1. exports default `loadSort(callback)` function
    1. `loadSort` listens for select change and
        1. creates a `sortChoices` object
        1. calls callback with `sortChoices` object
1. Load Sort Component in `index.js`
    1. import `loadSort`
    1. import `sortContacts`
    1. call `loadSort` with callback function
    1. callback function
        1. calls `sortContacts` with `contacts` and `sortChoice`
        1. call `loadContacts` with new array
1. Contacts Component
    1. clear rows when `loadContacts` is called

