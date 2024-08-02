/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js"

const firebaseConfig = {
   databaseURL: process.env.DATABASE_URL
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    console.log(inputValue)
})