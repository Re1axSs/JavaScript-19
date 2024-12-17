const cardTextInput = document.getElementById("card-text");
const cardColorSelect = document.getElementById("card-color");
const cardElement = document.getElementById("card");

cardTextInput.addEventListener("input", function() {
  cardElement.textContent = cardTextInput.value || "Текст на карте";
});

cardTextInput.addEventListener("focus", function() {
  cardTextInput.style.borderColor = "#007bff";
  cardTextInput.style.backgroundColor = "#f0f8ff";
});

cardTextInput.addEventListener("blur", function() {
  cardTextInput.style.borderColor = "";
  cardTextInput.style.backgroundColor = "";
});

cardColorSelect.addEventListener("change", function() {
  const selectedColor = cardColorSelect.value;
  cardElement.style.backgroundColor = selectedColor;
});
