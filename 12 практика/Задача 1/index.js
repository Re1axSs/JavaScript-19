const giftArr = [
  {
    title: "Скидка 20% на первую покупку в нашем магазине!",
    iconColor: "#FF6347"  
  },
  {
    title: "Скидка 10% на всё!",
    iconColor: "#4682B4"  
  },
  {
    title: "Подарок при первой покупке в нашем магазине!",
    iconColor: "#32CD32"  
  },
  {
    title: "Бесплатная доставка для вас!",
    iconColor: "#FFD700"  
  },
  {
    title: "Сегодня день больших скидок!",
    iconColor: "#FF4500"  
  }
];

function showPopup() {
  const randomIndex = Math.floor(Math.random() * giftArr.length);
  const gift = giftArr[randomIndex];

  const popup = document.getElementById('popup');
  const popupTitle = document.getElementById('popup-title');
  const popupIcon = document.getElementById('popup-icon');

  popupTitle.textContent = gift.title;
  popupIcon.style.backgroundColor = gift.iconColor;

  popup.style.display = 'block';

  const closeBtn = document.getElementById('close-btn');
  closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
  });
}

setTimeout(showPopup, 3000);
