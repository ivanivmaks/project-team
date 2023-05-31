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

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Зупиняємо стандартну поведінку форми

  const formData = new FormData(form); // Отримуємо дані з форми

  // Формуємо об'єкт з даними, які будемо відправляти на сервер
  const data = {
    name: formData.get('user-name'),
    surname: formData.get('user-surname'),
    email: formData.get('user_mail'),
    phoneNumber: formData.get('user_phone'),
    cardNumber: formData.get('user_card'),
    comment: formData.get('user_name'),
  };

  // Використовуйте функцію fetch для відправки даних на сервер
  fetch('/your-email-endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      if (response.ok) {
        // Дані успішно відправлені
        console.log('Data sent successfully');
        // Тут ви можете додати код для підтвердження або сповіщення користувача
      } else {
        // Виникла помилка при відправці даних
        console.log('Error sending data');
        // Тут ви можете додати код для обробки помилки або сповіщення користувача
      }
    })
    .catch(function (error) {
      console.log('Error sending data:', error);
    });
});
