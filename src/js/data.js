const form = document.getElementById('hero-modal__form');
const submitButton = document.getElementById('hero-modal-submit');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('personal-name');
  const surname = document.getElementById('personal-surname');
  const email = document.getElementById('user-mail');
  const phoneNumber = document.getElementById('user-phone');
  const cardNumber = document.getElementById('user-card');
  const comment = document.getElementById('user-comment');

  const userData = {
    name: name.value,
    surname: surname.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    cardNumber: cardNumber.value,
    comment: comment.value,
  };
  console.log(userData);
  localStorage.setItem('userData', JSON.stringify(userData));
  form.reset();
});
