document.getElementById("product-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const productName = document.getElementById("product-name").value;
  const productWeight = parseFloat(document.getElementById("product-weight").value);
  const deliveryDistance = parseFloat(document.getElementById("delivery-distance").value);

  if (!productName || productWeight <= 0 || deliveryDistance <= 0) {
    alert("Пожалуйста, заполните все поля корректно.");
    return;
  }

  const deliveryCost = (productWeight * deliveryDistance) / 10;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${productName}</td>
    <td>${productWeight} кг</td>
    <td>${deliveryDistance} км</td>
    <td>${deliveryCost.toFixed(2)} ₽</td>
  `;

  document.querySelector(".product-table tbody").appendChild(newRow);

  document.getElementById("product-form").reset();
});
