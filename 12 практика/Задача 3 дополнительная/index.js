document.addEventListener("DOMContentLoaded", function() {
  const promocodeArr = [
      { promocode: 'PROM10', gift: "Скидка 10%" },
      { promocode: 'PROM50', gift: "Скидка 50%" },
      { promocode: 'GIFT', gift: "Подарок в корзине" }
  ];

  const input = document.getElementById('promocodeInput');
  const button = document.getElementById('applyButton');
  const message = document.getElementById('message');

  button.addEventListener('click', function() {
      const inputValue = input.value.trim();
      const promocode = promocodeArr.find(item => item.promocode === inputValue);

      if (promocode) {
          message.innerHTML = `Промокод применён, ${promocode.gift}`;
          setCookie('promocode', inputValue, 7); // Сохраняем промокод в cookie на 7 дней
      } else {
          message.innerHTML = 'Неверный промокод';
      }
  });

  function setCookie(name, value, days) {
      const d = new Date();
      d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + d.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  function getCookie(name) {
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(';');
      for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name + "=") == 0) {
              return c.substring(name.length + 1, c.length);
          }
      }
      return "";
  }

  const savedPromocode = getCookie('promocode');
  if (savedPromocode) {
      const promocode = promocodeArr.find(item => item.promocode === savedPromocode);
      if (promocode) {
          message.innerHTML = `Промокод применён, ${promocode.gift}`;
      }
  }
});
