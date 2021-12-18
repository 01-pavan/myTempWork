function sendEmail() {
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'tempmail5601@elasticemail.com',
    Password: 'CC26EFF22DB46001368C278A622D0D4D76C8',
    To: 'abstractmail56@gmail.com',
    From: document.getElementById('email').value,
    Subject: 'New Contact form enquiry',
    Body: 'And this is the body',
  }).then(message => alert(message));
}
