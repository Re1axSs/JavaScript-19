import { renderListPage } from './pages/listPage.js';
import { renderAddPage } from './pages/addPage.js';
import { showLoader, hideLoader } from './components/loader.js';

export function initRouter() {
  loadPage('list');

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    loadPage(hash || 'list');
  });
}

async function loadPage(page) {
  const app = document.getElementById('app');
  app.innerHTML = '';
  showLoader(app);

  setTimeout(() => {
    if (page === 'list') renderListPage(app);
    else if (page === 'add') renderAddPage(app);
    else renderListPage(app);
    hideLoader();
  }, 500);
}
