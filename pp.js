const contactForm = document.getElementById('contact-form');
const contactList = document.getElementById('contact-list');
const searchInput = document.getElementById('search');

let contacts = [];


contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const tag = document.getElementById('tag').value;

  contacts.push({ name, phone, email, tag });
  renderContacts();
  contactForm.reset();
});


function renderContacts(filter = '') {
  contactList.innerHTML = '';
  contacts
    .filter(contact => 
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.tag.toLowerCase().includes(filter.toLowerCase())
    )
    .forEach((contact, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${contact.name}</td>
        <td>${contact.phone}</td>
        <td>${contact.email}</td>
        <td>${contact.tag}</td>
        <td>
          <button class="action-btn edit-btn" onclick="editContact(${index})">Editar</button>
          <button class="action-btn delete-btn" onclick="deleteContact(${index})">Eliminar</button>
        </td>
      `;
      contactList.appendChild(row);
    });
}


function deleteContact(index) {
  contacts.splice(index, 1);
  renderContacts();
}


function editContact(index) {
  const contact = contacts[index];
  document.getElementById('name').value = contact.name;
  document.getElementById('phone').value = contact.phone;
  document.getElementById('email').value = contact.email;
  document.getElementById('tag').value = contact.tag;
  deleteContact(index); 
}


searchInput.addEventListener('input', (e) => {
  renderContacts(e.target.value);
});
