const heightList = document.getElementById('height-list');
const addButton = document.getElementById('add-height');
const filterButton = document.getElementById('filter-height');

let heights = [160, 175, 150, 180, 165];

function renderHeights(filteredHeights = heights) {
    heightList.innerHTML = '';
    filteredHeights.forEach(height => {
        const li = document.createElement('li');
        li.textContent = `${height} см`;
        heightList.appendChild(li);
    });
}

addButton.addEventListener('click', () => {
    const newHeight = prompt("Введите рост ученика (в см):");
    if (newHeight) {
        const heightNumber = parseInt(newHeight);
        if (!isNaN(heightNumber) && heightNumber > 0) {
            heights.push(heightNumber);
            renderHeights();
        } else {
            alert("Пожалуйста, введите корректное значение роста!");
        }
    } else {
        alert("Рост не введён!");
    }
});

filterButton.addEventListener('click', () => {
    const minHeight = prompt("Введите минимальный рост для фильтрации (в см):");
    if (minHeight) {
        const minHeightNumber = parseInt(minHeight);
        if (!isNaN(minHeightNumber) && minHeightNumber > 0) {
            const filteredHeights = heights.filter(height => height >= minHeightNumber);
            renderHeights(filteredHeights);
        } else {
            alert("Пожалуйста, введите корректное значение для фильтра!");
        }
    } else {
        renderHeights();
    }
});

renderHeights();
