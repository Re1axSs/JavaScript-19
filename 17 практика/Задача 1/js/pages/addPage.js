import { saveItem } from '../storage.js';

export function renderAddPage(container) {
  const header = document.createElement('h1');
  header.textContent = 'Добавить запись';

  const form = document.createElement('form');
  form.innerHTML = `
    <label>Название: <input type="text" id="name" required></label>
    <label>Полка: <input type="text" id="shelf" required></label>
    <label>Вес: <input type="number" id="weight" required></label>
    <label>Время хранения (дд.мм.гггг): <input type="text" id="time" placeholder="дд.мм.гггг" required></label>
    <button type="submit">Добавить</button>
    <p id="error-message" style="color: red; display: none;">Некорректный формат даты. Используйте дд.мм.гггг.</p>
  `;

  const errorMessage = form.querySelector('#error-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const timeInput = form.querySelector('#time').value.trim();
    const datePattern = /^\d{2}\.\d{2}\.\d{4}$/; 

    if (!datePattern.test(timeInput)) {
      errorMessage.style.display = 'block';
      return;
    }

    const newItem = {
      name: form.querySelector('#name').value.trim(),
      shelf: form.querySelector('#shelf').value.trim(),
      weight: +form.querySelector('#weight').value,
      time: timeInput,
    };

    saveItem(newItem);
    window.location.hash = 'list';
  });

  container.append(header, form);
}
