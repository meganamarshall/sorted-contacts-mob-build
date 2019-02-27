export function makeContactRow(contact) {
    const currencyStyle = { style: 'currency', currency: 'USD' };
    const html = /*html*/
    `<tr>
        <td>${contact.isActive ? 'Yes' : 'No'}</td>
        <td>${contact.firstName}</td>
        <td>${contact.lastName}</td>
        <td class="center"><img src="${contact.picture}"></td>
        <td>${contact.balance.toLocaleString('en-US', currencyStyle)}</td>
        <td>${contact.age}</td>
        <td title="${contact.about}">${contact.company}</td>
        <td>${contact.email}</td>
        <td class="capitalize">${contact.favoriteFruit}</td>
    </tr>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadContacts(contacts) {
    
}