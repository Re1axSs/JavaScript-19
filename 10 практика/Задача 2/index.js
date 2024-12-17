const addButton = document.getElementById("add-btn");
const removeButton = document.getElementById("remove-btn");
const dynamicList = document.getElementById("dynamic-list");

addButton.addEventListener("click", () => {
  const listItem = document.createElement("li"); 
  listItem.textContent = "Новый элемент списка"; 
  dynamicList.appendChild(listItem); 
});

removeButton.addEventListener("click", () => {
  const lastItem = dynamicList.lastElementChild; 
  if (lastItem) {
    dynamicList.removeChild(lastItem); 
  }
});
