const formDOM = document.querySelector('#contactForm');
const modalDOM = document.querySelector('#modal');
const buttonCloseDOM = document.querySelector('#btn_close-modal');

function openModal() {
  if (modalDOM) {
    modalDOM.style.display = 'block';
  }
}

function closeModal() {
  if (modalDOM) {
    modalDOM.style.display = 'none';
  }
}

function sendEmail() {
  if (formDOM) {
    formDOM.addEventListener('submit', (e) => {
      e.preventDefault();

      const params = {
        name: document.querySelector('input[name="name"]').value,
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value,
      };

      if (params.name && params.email && params.message) {
        emailjs.send('service_klbqa3s', 'template_6eefduc', params)
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            openModal();
          })
          .catch((error) => {
            console.log('FAILED...', error);
          });
      } else {
        console.log('All fields are required.');
      }
    });
  }
}

if (buttonCloseDOM) {
  buttonCloseDOM.addEventListener('click', closeModal);
}


