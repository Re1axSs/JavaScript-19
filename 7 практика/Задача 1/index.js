const bookList = document.getElementById('book-list');
const addButton = document.getElementById('add-book');
const searchButton = document.getElementById('search-book');

let books = ["1984", "Война и мир", "Гарри Поттер", "Преступление и наказание"];

function renderBooks() {
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = book;
        bookList.appendChild(li);
    });
}

addButton.addEventListener('click', () => {
    const bookName = prompt("Введите название книги:");
    if (bookName) {
        books.push(bookName);
        renderBooks();
    } else {
        alert("Название книги не введено!");
    }
});

searchButton.addEventListener('click', () => {
    const searchName = prompt("Введите название книги для поиска:");
    const foundBook = books.find(book => book.toLowerCase() === searchName.toLowerCase());
    if (foundBook) {
        const listItems = bookList.getElementsByTagName('li');
        for (let item of listItems) {
            item.style.backgroundColor = '';
        }
        const foundItem = [...listItems].find(item => item.textContent === foundBook);
        if (foundItem) {
            foundItem.style.backgroundColor = 'yellow';
        }
    } else {
        alert("Книга не найдена!");
    }
});

renderBooks();
