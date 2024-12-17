export class Delivery {
    constructor(customerName, address, distance) {
      this.customerName = customerName;
      this.address = address;
      this.distance = distance;
    }
  
    createDeliveryCard() {
      const card = document.createElement('div');
      card.classList.add('delivery-card');
      card.innerHTML = `
        <h3>${this.customerName}</h3>
        <p>Адрес: ${this.address}</p>
        <p>Расстояние: ${this.distance} км</p>
      `;
      return card;
    }
  }
  