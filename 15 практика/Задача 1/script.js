document.addEventListener("DOMContentLoaded", function() {
    const filmForm = document.getElementById('film-form');
    const titleInput = document.getElementById('title');
    const genreInput = document.getElementById('genre');
    const releaseYearInput = document.getElementById('releaseYear');
    const isWatchedInput = document.getElementById('isWatched');
    const filmsTableBody = document.getElementById('film-tbody');
    const filterTitleInput = document.getElementById('filterTitle');
    const filterGenreSelect = document.getElementById('filterGenre');
    const deleteAllButton = document.getElementById('deleteAllButton');

    const getFilmsFromServer = async () => {
        const response = await fetch("https://sb-film.skillbox.cc/films", {
            headers: {
                email: "ovikdevil@gmail.com",
            },
        });
        return await response.json();
    };

    const renderFilms = async () => {
        const films = await getFilmsFromServer();
        const filterTitle = filterTitleInput.value.toLowerCase();
        const filterGenre = filterGenreSelect.value;

        const filteredFilms = films.filter(film => {
            return (
                film.title.toLowerCase().includes(filterTitle) &&
                (filterGenre === "" || film.genre === filterGenre)
            );
        });

        filmsTableBody.innerHTML = "";

        filteredFilms.forEach(film => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${film.title}</td>
                <td>${film.genre}</td>
                <td>${film.releaseYear}</td>
                <td>${film.isWatched ? "Да" : "Нет"}</td>
                <td>
                    <button class="delete-btn" data-id="${film.id}">Удалить</button>
                </td>
            `;
            filmsTableBody.appendChild(row);
        });

        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filmId = this.getAttribute('data-id');
                deleteFilm(filmId);
            });
        });
    };

    const deleteFilm = async (id) => {
        await fetch(`https://sb-film.skillbox.cc/films/${id}`, {
            method: 'DELETE',
            headers: {
                email: "ovikdevil@gmail.com",
            },
        });
        renderFilms();
    };

    const deleteAllFilms = async () => {
        await fetch("https://sb-film.skillbox.cc/films", {
            method: 'DELETE',
            headers: {
                email: "ovikdevil@gmail.com",
            },
        });
        renderFilms();
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const title = titleInput.value.trim();
        const genre = genreInput.value.trim();
        const releaseYear = releaseYearInput.value.trim();
        const isWatched = isWatchedInput.checked;

        if (!title || !genre || !releaseYear) {
            alert("Пожалуйста, заполните все поля!");
            return;
        }

        const film = {
            title: title,
            genre: genre,
            releaseYear: releaseYear,
            isWatched: isWatched,
        };

        await fetch("https://sb-film.skillbox.cc/films", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                email: "ovikdevil@gmail.com",
            },
            body: JSON.stringify(film),
        });
        renderFilms();
    };

    filmForm.addEventListener("submit", handleFormSubmit);
    filterTitleInput.addEventListener("input", renderFilms);
    filterGenreSelect.addEventListener("change", renderFilms);
    deleteAllButton.addEventListener("click", deleteAllFilms);

    renderFilms();
});
