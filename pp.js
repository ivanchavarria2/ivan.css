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