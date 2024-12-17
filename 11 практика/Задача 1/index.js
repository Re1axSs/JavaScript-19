document.getElementById("survey-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const rating = document.getElementById("rating").value;
  const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(input => input.value);
  const comments = document.getElementById("comments").value;

  let errors = [];

  if (!name) errors.push("Имя обязательно для заполнения.");
  if (!email || !/\S+@\S+\.\S+/.test(email)) errors.push("Введите правильный email.");
  if (!gender) errors.push("Выберите пол.");

  if (errors.length > 0) {
    alert(errors.join("\n"));
    return;
  }

  const result = `
    <p><strong>Имя:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Пол:</strong> ${gender.value}</p>
    <p><strong>Оценка сервиса:</strong> ${rating}</p>
    <p><strong>Интересы:</strong> ${interests.length > 0 ? interests.join(", ") : "Нет интересов"}</p>
    <p><strong>Дополнительные комментарии:</strong> ${comments ? comments : "Нет комментариев"}</p>
  `;

  document.getElementById("result").innerHTML = result;
});
