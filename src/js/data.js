const firebaseConfig = {
  apiKey: 'AIzaSyCZOgZa27UP5HpyJ0isI9K27PBbA09iWzA',
  authDomain: 'project-team-obd.firebaseapp.com',
  projectId: 'project-team-obd',
  storageBucket: 'project-team-obd.appspot.com',
  messagingSenderId: '828835118965',
  appId: '1:828835118965:web:e734c8b26ed4c1807f5d3c',
  measurementId: 'G-81DT6E36X4',
};
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const nameInput = document.getElementById('personal-name');
const surnameInput = document.getElementById('personal-surname');
const emailInput = document.getElementsByClassName('hero-modal__input-3')[0];
const phoneInput = document.getElementsByClassName('hero-modal__input-tel')[0];
const cardInput = document.getElementsByClassName('hero-modal__input-5')[0];
const commentInput = document.getElementsByClassName('hero-modal__input-6')[0];

console.log('fsfv');

document
  .getElementById('hero-modal__form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Зупинка стандартної поведінки форми

    // Отримання значень з полів форми
    const name = nameInput.value;
    const surname = surnameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const card = cardInput.value;
    const comment = commentInput.value;

    // Створення нового об'єкту з отриманими даними
    const data = {
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      card: card,
      comment: comment,
    };

    console.log(data);

    // Надсилання даних до бази даних
    const newEntryRef = database.ref().push();
    newEntryRef
      .set(data)
      .then(() => {
        console.log('Дані збережено');
        // Очистка полей формы
        nameInput.value = '';
        surnameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        cardInput.value = '';
        commentInput.value = '';
      })
      .catch(error => {
        console.error('Помилка', error);
      });
  });
