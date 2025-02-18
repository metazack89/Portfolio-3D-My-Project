function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');

  const button = document.querySelector('.toggle-theme');
  button.textContent = body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';
}

function switchLanguage(lang) {
  // alert(lang === 'es' ? 'Idioma cambiado a Español' : 'Language switched to English');
}

function sendEmail(event) {
  event.preventDefault();

  const form = event.target;
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message';
  messageDiv.textContent = 'Sending message...';
  form.appendChild(messageDiv);

  const serviceID = 'service_klbqa3s';
  const templateID = 'template_6eefduc';
  const publicKey = 'pMYQUNDeT9lp7ZShy';

  emailjs.init(publicKey);

  emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
      messageDiv.className = 'message success';
      messageDiv.textContent = 'Message sent successfully!';
    })
    .catch(() => {
      messageDiv.className = 'message error';
      messageDiv.textContent = 'Failed to send message. Please try again.';
    })
    .finally(() => {
      setTimeout(() => {
        messageDiv.remove();
      }, 5000);
    });
}

function addIconAnimations() {
  const icons = document.querySelectorAll('.icon');
  icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.transition = 'transform 0.5s ease';
      icon.style.transform = 'rotate(360deg)';
    });

    icon.addEventListener('mouseout', () => {
      icon.style.transition = 'transform 0.5s ease';
      icon.style.transform = 'rotate(0deg)';
    });
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', sendEmail);
  }

  const toggleButton = document.querySelector('.toggle-theme');
  addIconAnimations();
});


const buttons = document.querySelectorAll('.btn-ver-mas');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('View More button clicked');
  });
});
