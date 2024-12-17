document.addEventListener("DOMContentLoaded", function() {
    const movieForm = document.getElementById('movieForm');
    const titleInput = document.getElementById('title');
    const genreInput = document.getElementById('genre');
    const yearInput = document.getElementById('year');
    const moviesTable = document.getElementById('moviesTable').getElementsByTagName('tbody')[0];
    const sortSelect = document.getElementById('sort');
    const submitButton = document.getElementById('submitButton');

    let editIndex = -1;

    const getMoviesFromStorage = () => {
        return JSON.parse(localStorage.getItem('movies')) || [];
    };

    const saveMoviesToStorage = (movies) => {
        localStorage.setItem('movies', JSON.stringify(movies));
    };

    const renderMovies = () => {
        const movies = getMoviesFromStorage();
        const sortBy = sortSelect.value;

        const sortedMovies = movies.sort((a, b) => {
            if (a[sortBy] < b[sortBy]) return -1;
            if (a[sortBy] > b[sortBy]) return 1;
            return 0;
        });

        moviesTable.innerHTML = '';
        sortedMovies.forEach((movie, index) => {
            const row = moviesTable.insertRow();
            row.innerHTML = `
                <td>${movie.title}</td>
                <td>${movie.genre}</td>
                <td>${movie.year}</td>
                <td>
                    <button class="edit-btn" data-index="${index}">Редактировать</button>
                    <button class="delete-btn" data-index="${index}">Удалить</button>
                </td>
            `;
        });

        const editButtons = document.querySelectorAll('.edit-btn');
        const deleteButtons = document.querySelectorAll('.delete-btn');

        editButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                editMovie(index);
            });
        });

        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                deleteMovie(index);
            });
        });
    };

    const deleteMovie = (index) => {
        const movies = getMoviesFromStorage();
        movies.splice(index, 1);
        saveMoviesToStorage(movies);
        renderMovies();
    };

    const editMovie = (index) => {
        const movies = getMoviesFromStorage();
        const movie = movies[index];
        titleInput.value = movie.title;
        genreInput.value = movie.genre;
        yearInput.value = movie.year;

        editIndex = index;
        submitButton.textContent = "Сохранить изменения";
    };

    movieForm.onsubmit = (e) => {
        e.preventDefault();
        const title = titleInput.value;
        const genre = genreInput.value;
        const year = yearInput.value;

        if (title && genre && year) {
            const movies = getMoviesFromStorage();
            if (editIndex === -1) {
                movies.push({ title, genre, year });
            } else {
                movies[editIndex] = { title, genre, year };
                editIndex = -1;
                submitButton.textContent = "Добавить фильм";
            }
            saveMoviesToStorage(movies);
            renderMovies();
            movieForm.reset();
        } else {
            alert('Пожалуйста, заполните все поля!');
        }
    };

    sortSelect.addEventListener('change', renderMovies);

    renderMovies();
});
