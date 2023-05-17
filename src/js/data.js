const firebaseConfig = {
  apiKey: 'AIzaSyCZOgZa27UP5HpyJ0isI9K27PBbA09iWzA',
  authDomain: 'project-team-obd.firebaseapp.com',
  projectId: 'project-team-obd',
  storageBucket: 'project-team-obd.appspot.com',
  messagingSenderId: '828835118965',
  appId: '1:828835118965:web:e734c8b26ed4c1807f5d3c',
  measurementId: 'G-81DT6E36X4',
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

var nameInput = document.getElementById('personal-name');
var surnameInput = document.getElementById('personal-surname');
var emailInput = document.getElementById('user_mail');
var phoneInput = document.getElementById('user_phone');
var cardInput = document.getElementById('user_card');
var commentInput = document.getElementById('user_comment');

document
  .getElementById('hero-modal-submit')
  .addEventListener('click', function (event) {
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

    // Надсилання даних до бази даних
    var newEntryRef = database.ref().push();
    newEntryRef.set(data);

    // Очищення полів форми
    nameInput.value = '';
    surnameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    cardInput.value = '';
    commentInput.value = '';
  });
