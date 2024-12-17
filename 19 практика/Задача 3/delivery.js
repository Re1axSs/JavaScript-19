export class Delivery {
  constructor(customerName, address, distance, status = 'delivery') {
    this.customerName = customerName;
    this.address = address;
    this.distance = distance;
    this.status = status;
  }

  createDeliveryCard() {
    const card = document.createElement('div');
    card.classList.add('delivery-card');
    card.classList.add(this.status);
    card.innerHTML = `
      <h3>${this.customerName}</h3>
      <p>Адрес: ${this.address}</p>
      <p>Расстояние: ${this.distance} км</p>
      <p class="status">Статус: <span>${this.status}</span></p>
      <button class="edit-btn">Изменить</button>
    `;
    return card;
  }

  setStatus(newStatus) {
    this.status = newStatus;
  }

  updateCard() {
    const card = this.createDeliveryCard();
    const parent = document.getElementById('delivery-list');
    const oldCard = parent.querySelector(`.delivery-card[data-id="${this.customerName}"]`);
    parent.replaceChild(card, oldCard);
  }
}

export class EditDelivery extends Delivery {
  constructor(customerName, address, distance, status) {
    super(customerName, address, distance, status);
  }

  createDeliveryCard() {
    const card = super.createDeliveryCard();
    const editButton = card.querySelector('.edit-btn');
    
    editButton.addEventListener('click', () => {
      this.openEditModal();
    });

    return card;
  }

  openEditModal() {
    const modal = document.getElementById('edit-modal');
    const nameField = modal.querySelector('#customer-name');
    const addressField = modal.querySelector('#address');
    const distanceField = modal.querySelector('#distance');
    const statusField = modal.querySelector('#status');

    nameField.value = this.customerName;
    addressField.value = this.address;
    distanceField.value = this.distance;
    statusField.value = this.status;

    modal.style.display = 'flex';

    const saveButton = modal.querySelector('#save-btn');
    saveButton.onclick = () => {
      this.customerName = nameField.value;
      this.address = addressField.value;
      this.distance = parseFloat(distanceField.value);
      this.setStatus(statusField.value);
      this.updateCard();
      modal.style.display = 'none';
    };

    const closeButton = modal.querySelector('.close-btn');
    closeButton.onclick = () => {
      modal.style.display = 'none';
    };
  }

  static getTotalDistance(deliveries) {
    let totalDistance = 0;
    deliveries.forEach(delivery => {
      if (delivery.status !== 'canceled') {
        totalDistance += delivery.distance;
      }
    });
    return totalDistance;
  }
}

document.getElementById('calculate-btn').addEventListener('click', () => {
  const totalDistance = EditDelivery.getTotalDistance(deliveryArr);
  document.getElementById('total-distance').textContent = `Общее расстояние: ${totalDistance} км`;
});
