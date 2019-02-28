import sortContacts from '../src/sort-contacts.js';
const test = QUnit.test;

const contacts = [{
    firstName: 'Joe',
    age: 43
},
{
    firstName: 'Larry',
    age: 17
},
{
    firstName: 'Bob',
    age: 25
}];


test('sort by first name', assert => {
    const sortChoice = { property: 'firstName' };
    //act
    const sorted = sortContacts(contacts, sortChoice);
    const expected = [
        {
            firstName: 'Bob',
            age: 25
        },
        {
            firstName: 'Joe',
            age: 43
        },
        {
            firstName: 'Larry',
            age: 17
        }
    ];
    //assert
    assert.deepEqual(sorted, expected);
});

test('sort by age', assert => {
    const sortChoice = { property: 'age' };
    //act
    const sorted = sortContacts(contacts, sortChoice);
    const expected = [
        {
            firstName: 'Larry',
            age: 17
        },
        {
            firstName: 'Bob',
            age: 25
        },
        {
            firstName: 'Joe',
            age: 43
        }
    ];
    //assert
    assert.deepEqual(sorted, expected);
});