// Cambiar entre modo oscuro y claro
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');

  const button = document.querySelector('.toggle-theme');
  button.textContent = body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';
}

// Cambiar idioma (simulado)
function switchLanguage(lang) {
  // alert(lang === 'es' ? 'Idioma cambiado a Español' : 'Language switched to English');
}

// Enviar formulario con EmailJS
function sendEmail(event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  const form = event.target;
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message';
  messageDiv.textContent = 'Sending message...';
  form.appendChild(messageDiv);

  const serviceID = 'service_klbqa3s'; // Reemplaza con tu Service ID de EmailJS
  const templateID = 'template_6eefduc'; // Reemplaza con tu Template ID de EmailJS
  const publicKey = 'pMYQUNDeT9lp7ZShy'; // Reemplaza con tu Public Key de EmailJS

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

// Animaciones de íconos
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

// Inicializar eventos al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  // Configurar el formulario
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', sendEmail);
  }

  // Agregar animaciones a los íconos
  addIconAnimations();
});
