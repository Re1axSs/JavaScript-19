function totalSum(price, amount, discount) {
  let totalPrice = price * amount;
  let discountAmount = totalPrice * (discount / 100);
  return totalPrice - discountAmount;
}

let priceItem = 25000;
let amountItem = 3;
let discountItem = 20;

console.log(totalSum(priceItem, amountItem, discountItem));
