const list = document.getElementById('list');
// This line declares a constant variable named list and assigns to it the HTML element that has an ID of 'list'.

function addItem(){
    // This line declares a function named addItem.
    const input = document.getElementById('input');
    // This line declares a constant variable named input and assigns to it the HTML element that has an ID of 'input'.
    const item = document.createElement('li');
    // This line declares a constant variable named item and assigns to it a new HTML element of type 'li', which represents an item in a list.
    item.innerHTML = input.value;
    // This line sets the inner HTML content of the item element to the value of the input element.
    item.addEventListener('click', toggleItem)
    // This line adds a click event listener to the item element, which will call the toggleItem function when the item is clicked.
    list.appendChild(item)
    // This line adds the item element as a child of the list element.
    input.value ='';
    // This line sets the value of the input element to an empty string, clearing the input field.
}

function toggleItem(){
    // This line declares a function named toggleItem.
    this.classList.toggle('completed');
    // This line toggles the 'completed' CSS class of the clicked item element. If the class is not present, it adds it. If it is already present, it removes it.
}
