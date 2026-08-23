const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    feedback.textContent = "Preencha nome e e-mail antes de enviar.";
    return;
  }

  // Aqui entraria a chamada real, ex: fetch para um backend ou serviço de e-mail.
  feedback.textContent = `Obrigado, ${name}. Em breve entramos em contato.`;
  form.reset();
});
