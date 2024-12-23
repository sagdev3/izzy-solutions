const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_bp9mz3a';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviando Correo';
      alert('Enviado con Éxito!!!');
      this.reset();

    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});