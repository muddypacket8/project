const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  const resident = document.querySelector('#resident').value;
  const location = document.querySelector('#location').value;

  fetch('/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      message,
      resident,
      location
    })
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);
    alert('Form data submitted successfully!');
  })
  .catch(error => {
    console.error(error);
    alert('Error submitting form data!');
  });
});
