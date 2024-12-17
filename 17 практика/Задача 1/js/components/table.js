import { deleteItem, getItems } from '../storage.js';

export function renderTable(items) {
  let currentSort = { column: null, ascending: true };

  const table = document.createElement('table');
  table.innerHTML = `
    <thead>
      <tr>
        <th data-sort="name">Название</th>
        <th data-sort="shelf">Полка</th>
        <th data-sort="weight">Вес</th>
        <th data-sort="time">Время хранения (До)</th>
        <th>Удалить</th>
      </tr>
    </thead>
    <tbody>
      ${generateTableRows(items)}
    </tbody>
  `;

  table.querySelectorAll('th[data-sort]').forEach((th) => {
    th.addEventListener('click', () => {
      const column = th.dataset.sort;
      currentSort.ascending = currentSort.column === column ? !currentSort.ascending : true;
      currentSort.column = column;
      const sortedItems = sortItems(items, column, currentSort.ascending);
      table.querySelector('tbody').innerHTML = generateTableRows(sortedItems);
    });
  });

  table.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const index = e.target.dataset.index;
      deleteItem(index);
      e.target.closest('tr').remove();
    }
  });

  return table;
}

function generateTableRows(items) {
  return items
    .map(
      (item, index) => `
      <tr>
        <td>${item.name}</td>
        <td>${item.shelf}</td>
        <td>${item.weight}</td>
        <td>${item.time}</td>
        <td><button data-index="${index}">Удалить</button></td>
      </tr>
    `
    )
    .join('');
}

function sortItems(items, column, ascending) {
  return [...items].sort((a, b) => {
    if (a[column] < b[column]) return ascending ? -1 : 1;
    if (a[column] > b[column]) return ascending ? 1 : -1;
    return 0;
  });
}
