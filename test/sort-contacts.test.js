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

function sortByFirstName(contacts) {
    return contacts.sort((a, b) => {
        if(a.firstName === b.firstName) {
            return 0;
        }
        if(a.firstName > b.firstName) {
            return 1;
        }
        return -1;
    });
}

function sortByAge(contacts) {
    return contacts.sort((a, b) => {
        if(a.age === b.age) {
            return 0;
        }
        if(a.age > b.age) {
            return 1;
        }
        return -1;
    });
}

test('sort by first name', assert => {
    //act
    const sorted = sortByFirstName(contacts);
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
    //act
    const sorted = sortByAge(contacts);
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