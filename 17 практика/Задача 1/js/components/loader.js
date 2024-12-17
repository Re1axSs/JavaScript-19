export function showLoader(container) {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.textContent = 'Загрузка...';
    container.appendChild(loader);
  }
  
  export function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) loader.remove();
  }
  