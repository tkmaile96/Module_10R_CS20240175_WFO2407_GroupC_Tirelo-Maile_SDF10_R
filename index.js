/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

// my database URl
const appSettings = {
    databaseURL: "https://sdf10-f1c24-default-rtdb.europe-west1.firebasedatabase.app/"
};
 

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInApp = ref(database, "items"); // link my items to the database


// DOM 
const inputFieldEl = document.getElementById ("input-field");
const addButtonEl = document.getElementById("add-button");
const listItemsEl = document.getElementById("list-items");

addButtonEl.addEventListener("click", function() {

    let inputValue = inputFieldEl.value;

    push(itemsInApp, inputValue); //push my items to the database

    clearInputFieldEl();

    
  
});

//Fetching items from the database
onValue(itemsInApp, function(snapshot) {
let itemsArray = Object.entries(snapshot.val()) // An array for my items,use keys for IDs, Entries for both IDs and Values

clearListItems() // clear item list function

// For loops
for (let i = 0; i  < itemsArray.length; i++) {
   let currentItem = itemsArray[i];
   let currentItemID = currentItem[0];
   let currentItemValue = currentItem[1];

    appendItems(currentItem);
};
});  

// function to clear my item list
function clearListItems() {
    listItemsEl.innerHTML = "";

}

//funtion to clear the input value after addind an item
function clearInputFieldEl() {
    inputFieldEl.value = "";
};

//function to append/Add items to my app
function appendItems(item) {

    let itemID = item[0];
    let itemValue = item[1];
    let newElement = document.createElement("li") //create a list element

    newElement.textContent = itemValue;

    newElement.addEventListener("click", function() {
       
        let exactLocationOfItem = ref(database, `items/${itemID}`);
        remove(exactLocationOfItem);
    })

    listItemsEl.append(newElement);
}