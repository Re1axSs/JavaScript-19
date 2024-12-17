import { getItems, deleteItem } from '../storage.js';
import { renderTable } from '../components/table.js';

export function renderListPage(container) {
  const header = document.createElement('h1');
  header.textContent = 'Список вещей на складе';

  const addButton = document.createElement('button');
  addButton.textContent = 'Добавить запись';
  addButton.onclick = () => (window.location.hash = 'add');

  const table = renderTable(getItems());

  container.append(header, addButton, table);
}
