const prices = [100, 500, 250, 750, 300];
const sortAscButton = document.getElementById("sort-asc");
const sortDescButton = document.getElementById("sort-desc");
const priceList = document.getElementById("price-list");

const displayPrices = (pricesArray) => {
  priceList.innerHTML = "";
  pricesArray.forEach(price => {
    const listItem = document.createElement("li");
    listItem.textContent = `${price} ₽`;
    priceList.appendChild(listItem);
  });
};

const sortPricesAsc = () => {
  const sortedPrices = [...prices].sort((a, b) => a - b);
  displayPrices(sortedPrices);
};

const sortPricesDesc = () => {
  const sortedPrices = [...prices].sort((a, b) => b - a);
  displayPrices(sortedPrices);
};

displayPrices(prices);

sortAscButton.addEventListener("click", sortPricesAsc);
sortDescButton.addEventListener("click", sortPricesDesc);
