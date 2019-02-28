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
function sortContacts(contacts, sortChoice) {
    const property = sortChoice.property;
    return contacts.sort((a, b) => {
        if(a[property] === b[property]) {
            return 0;
        }
        if(a[property] > b[property]) {
            return 1;
        }
        return -1;
    });
}

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