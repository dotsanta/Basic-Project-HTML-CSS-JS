To-Do List
This is a simple To-Do List web application built using HTML, CSS, and JavaScript. It allows users to add new items to the list, and mark them as completed by clicking on them.

HTML
The HTML code defines the basic structure of the web page. It contains a div element with a class of container, which serves as the main container for the application. Inside the container, there is a h1 element with the title of the application, an input element for adding new items to the list, a button element for submitting the new item, and a ul element with an id of list that will contain the items.

CSS
The CSS code provides the styling for the HTML elements. It sets the maximum width of the container to 500 pixels and centers it on the page. It also styles the h1 element, the input element, the button element, and the ul and li elements.

JavaScript
The JavaScript code provides the functionality for the To-Do List. It defines a variable list that references the ul element, and two functions: addItem and toggleItem.

The addItem function gets the value of the input element, creates a new li element with the value as its inner HTML, adds a click event listener to the new element, appends the new element to the ul element, and clears the value of the input element.

The toggleItem function toggles the completed class of the clicked li element, which changes its appearance according to the CSS rules. The completed class sets the text decoration to line-through and the color to gray.

Conclusion
This To-Do List web application is a simple example of how HTML, CSS, and JavaScript can be used together to create a functional and visually appealing user interface.
