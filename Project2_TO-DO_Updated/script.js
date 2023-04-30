const inputBox = document.getElementById('input');
const listContainer = document.getElementById('list');

// These two lines use the document.getElementById() 
// method to get references to the HTML elements with the IDs "input" and "list",
// respectively. The const keyword is used to declare these variables as constants, 
// which means they cannot be reassigned to a different value.

function addTask(){
    if(inputBox.value === ''){
        alert('You must write something!');
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        saveData()
    }
    inputBox.value = '';
}

// This function is called when the user clicks the "Add" button on the page. 
// If the input field is empty, an alert message is displayed asking the user to enter a task. 
// If the input field is not empty, a new "li" element is created and added to the "ul" element with the ID "list". 
// A new "span" element is also created and added to the "li" element, which will be used to remove the task later. 
// Finally, the saveData() function is called to save the updated list to local storage. The value of the input field is then set back to an empty string.

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked')
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// This code adds an event listener to the ul element with the ID "list". 
// When the user clicks on an element inside the ul, this function is called. 
// If the clicked element is an li element, it toggles the checked class on the element to mark it as completed or not. 
// The saveData() function is then called to save the updated list to local storage. If the clicked element is a span element, 
// it removes the parent li element from the ul. Again, the saveData() function is called to save the updated list to local storage.

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
};


// This function saves the contents of the ul element with the ID "list" to local storage. 
// The localStorage.setItem() method is used to set an item in local storage with the key "data" 
// and the value of the innerHTML property of the ul element.

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
};

showTask();

// This function retrieves the list data from local storage and sets the innerHTML property of the ul element with 
// the ID "list" to that data. The localStorage.getItem() method is used to retrieve the value of the "data" key from local storage. 
// Finally, the showTask() function is called to display the saved tasks when the page loads.