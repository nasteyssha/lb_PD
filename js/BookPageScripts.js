// Додати обробник події для кнопки "Купити зараз"
// document.getElementById('buy-now').addEventListener('click', function() {
//   alert('Книга додана до кошика!');
// });

// Додати обробники подій для кнопок "Характеристика" та "Відгуки"
document.getElementById('characteristics-btn').addEventListener('click', function() {
  toggleInfoContent('characteristics');
});

document.getElementById('reviews-btn').addEventListener('click', function() {
  toggleInfoContent('reviews');
});

document.getElementById('description-btn').addEventListener('click', function() {
  toggleInfoContent('description');
});

// Функція для переключення видимості розгорнутого меню
function toggleInfoContent(contentId) {
  var content = document.getElementById(contentId);
  content.classList.toggle('active');
}

// Функція для зміни кольору кнопки "Опис"
function changeColor1() {
  var button = document.getElementById("description-btn");
  button.classList.toggle("clicked");
}

// Функція для зміни кольору кнопки "Характеристика"
function changeColor2() {
  var button = document.getElementById("characteristics-btn");
  button.classList.toggle("clicked");
}

// Функція для зміни кольору кнопки "Відгуки"
function changeColor3() {
  var button = document.getElementById("reviews-btn");
  button.classList.toggle("clicked");
}

// Функція для зміни кольору кнопки "Купити зараз"
function changeColor4() {
  var button = document.getElementById("buy-now");
  button.classList.add("clicked");
  setTimeout(function() {
    button.classList.remove("clicked");
  }, 1500);
}
