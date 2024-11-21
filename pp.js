const contactForm = document.getElementById('contact-form');
const contactList = document.getElementById('contact-list');
const searchInput = document.getElementById('search');

let contacts = [];


contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('nombre').value;
  const phone = document.getElementById('telefono').value;
  const email = document.getElementById('email').value;
  const tag = document.getElementById('etiqueta').value;

  contacts.push({ nombre, telefono, email, etiqueta });
  renderContacts();
  contactForm.reset();
});


function renderContacts(filter = '') {
    contactList.innerHTML = '';
    contacts
      .filter(contact => 
        contact.nombre.toLowerCase().includes(filter.toLowerCase()) ||
        contact.etiqueta.toLowerCase().includes(filter.toLowerCase())
      )
      .forEach((contact, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${contact.nombre}</td>
          <td>${contact.telefono}</td>
          <td>${contact.email}</td>
          <td>${contact.etiqueta}</td>
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
    document.getElementById('nombre').value = contact.nombre;
    document.getElementById('phone').value = contact.telefono;
    document.getElementById('email').value = contact.email;
    document.getElementById('tag').value = contact.etiqueta;
    deleteContact(index); 
  }
  
  
  searchInput.addEventListener('input', (e) => {
    renderContacts(e.target.value);
  });
  