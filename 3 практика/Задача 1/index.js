let cardInATM = true; // Карта есть в банкомате
let balance = 500; // Доступная сумма на карте

function performTransaction(amount) {
  if (cardInATM && amount <= balance) {
    console.log("Операция выполняется");
  } else {
    console.log("Операция отклонена");
  }
}

let amount = parseInt(prompt("Введите сумму для операции:"));
performTransaction(amount);
