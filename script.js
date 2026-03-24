const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const form = document.querySelector('.contact-form');
const note = document.querySelector('#form-note');

if (toggle && nav) {
  const syncMenuState = (isOpen) => {
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  };

  syncMenuState(false);

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    syncMenuState(isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      syncMenuState(false);
    });
  });
}

if (form && note) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    note.textContent = 'Front end site is working. Connect this form to Formspree, Basin, Tally, or your email tool to receive real submissions.';
  });
}
