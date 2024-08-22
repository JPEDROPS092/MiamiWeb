const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  // Enviar os dados para o servidor
  fetch('/enviar-dados', {
    method: 'POST',
    body: formData,
  })
 .then((response) => response.json())
 .then((data) => console.log(data))
 .catch((error) => console.error(error));
});