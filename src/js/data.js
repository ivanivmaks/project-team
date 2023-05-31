// const form = document.getElementById('hero-modal__form');
// const submitButton = document.getElementById('hero-modal-submit');

// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   const name = document.getElementById('personal-name');
//   const surname = document.getElementById('personal-surname');
//   const email = document.getElementById('user-mail');
//   const phoneNumber = document.getElementById('user-phone');
//   const cardNumber = document.getElementById('user-card');
//   const comment = document.getElementById('user-comment');

//   const userData = {
//     name: name.value,
//     surname: surname.value,
//     email: email.value,
//     phoneNumber: phoneNumber.value,
//     cardNumber: cardNumber.value,
//     comment: comment.value,
//   };
//   console.log(userData);
//   localStorage.setItem('userData', JSON.stringify(userData));
//   form.reset();
// });

const form = document.getElementById('hero-modal__form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const data = {
    name: formData.get('user-name'),
    surname: formData.get('user-surname'),
    email: formData.get('user_mail'),
    phoneNumber: formData.get('user_phone'),
    cardNumber: formData.get('user_card'),
    comment: formData.get('user_name'),
  };

  fetch('/ivanivmaks@gmail.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      if (response.ok) {
        console.log('Email sent successfully');
        // Додаткові дії після успішної відправки листа
      } else {
        console.log('Error sending email');
        // Обробка помилки відправки листа
      }
    })
    .catch(function (error) {
      console.log('Error sending email:', error);
    });

  form.reset();
});
