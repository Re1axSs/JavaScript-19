const promocodeObj = {
  promocode: "PROM50",
  gift: "Скидка 50%"
};

const promocodeForm = document.getElementById('promocodeForm');
const promocodeInput = document.getElementById('promocodeInput');
const message = document.getElementById('message');

function getCookie() {
  return document.cookie.split('; ').reduce((acc, item) => {
      const [name, value] = item.split('=');
      acc[name] = value;
      return acc;
  }, {});
}

const cookie = getCookie();
if (cookie.promocode) {
  promocodeInput.value = cookie.promocode;
  message.textContent = `Промокод активирован: ${cookie.promocode}. ${cookie.gift}`;
}

promocodeForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputValue = promocodeInput.value.trim();
  if (inputValue === promocodeObj.promocode) {
      message.textContent = `Промокод активирован: ${promocodeObj.promocode}. ${promocodeObj.gift}`;
      document.cookie = `promocode=${promocodeObj.promocode}; gift=${promocodeObj.gift}; path=/`;
  } else {
      message.textContent = '';
  }
});
