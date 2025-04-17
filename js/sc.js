const form = document.querySelector('form'); // Вибираємо перший елемент <form> в документі
const nameInput = document.querySelector('#name'); // Вибираємо елемент з ідентифікатором "name"
const emailInput = document.querySelector('#email'); // Вибираємо елемент з ідентифікатором "email"
const passwordInput = document.querySelector('#password'); // Вибираємо елемент з ідентифікатором "password"

form.addEventListener('submit', (event) => {
  let errors = []; // Масив для збереження помилок

  if (nameInput.value === '') {
    errors.push('Введите имя'); // Додаємо повідомлення про помилку до масиву
    document.querySelector('#name-error').textContent = 'Введите имя'; // Встановлюємо текст помилки для елемента з ідентифікатором "name-error"
  } else {
    document.querySelector('#name-error').textContent = ''; // Видаляємо текст помилки, якщо значення поля "name" валідне
  }

  if (emailInput.value === '') {
    errors.push('Введите email'); // Додаємо повідомлення про помилку до масиву
    document.querySelector('#email-error').textContent = 'Введите email'; // Встановлюємо текст помилки для елемента з ідентифікатором "email-error"
  } else {
    document.querySelector('#email-error').textContent = ''; // Видаляємо текст помилки, якщо значення поля "email" валідне
  }

  if (passwordInput.value === '') {
    errors.push('Введите пароль'); // Додаємо повідомлення про помилку до масиву
    document.querySelector('#password-error').textContent = 'Введите пароль'; // Встановлюємо текст помилки для елемента з ідентифікатором "password-error"
  } else {
    document.querySelector('#password-error').textContent = ''; // Видаляємо текст помилки, якщо значення поля "password" валідне
  }

  if (errors.length > 0) {
    event.preventDefault(); // Блокуємо відправку форми, якщо є помилки
  }
});