import { makeContactRow } from '../src/contacts-component.js';
const test = QUnit.test;

test('makes contact row template', assert => {
    // arrange
    const contact = {
        'isActive': true,
        'balance': 2559.99,
        'picture': 'http://placehold.it/32x32',
        'age': 28,
        'firstName': 'Cantu',
        'lastName': 'Sullivan',
        'company': 'IDETICA',
        'email': 'cantu.sullivan@idetica.com',
        'about': 'Minim exercitation nisi ullamco consequat fugiat aute sit amet aute eu nisi. Nulla ad dolor ut fugiat sit sint commodo. Sint duis ullamco labore aute pariatur aute velit consequat elit proident sit aute est. In in culpa velit quis enim occaecat. Veniam esse laboris irure consequat. Laborum dolore nulla excepteur aute sit minim sit voluptate labore non esse cupidatat exercitation. Eiusmod incididunt consectetur quis proident.',
        'favoriteFruit': 'banana'
    };

    // act
    const dom = makeContactRow(contact);
    const expected = /*html*/
    `<tr>
        <td>Yes</td>
        <td>Cantu</td>
        <td>Sullivan</td>
        <td class="center"><img src="http://placehold.it/32x32"></td>
        <td>$2,559.99</td>
        <td>28</td>
        <td title="Minim exercitation nisi ullamco consequat fugiat aute sit amet aute eu nisi. Nulla ad dolor ut fugiat sit sint commodo. Sint duis ullamco labore aute pariatur aute velit consequat elit proident sit aute est. In in culpa velit quis enim occaecat. Veniam esse laboris irure consequat. Laborum dolore nulla excepteur aute sit minim sit voluptate labore non esse cupidatat exercitation. Eiusmod incididunt consectetur quis proident.">IDETICA</td>
        <td>cantu.sullivan@idetica.com</td>
        <td class="capitalize">banana</td>
    </tr>`;

    // assert
    assert.htmlEqual(dom, expected);

});