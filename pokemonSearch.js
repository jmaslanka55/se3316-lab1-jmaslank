function divCreate() { //Creates new div to store searched pokemon list
    let createDiv = document.getElementById("createDiv"); //gets id used as placeholder
    let secondDiv = document.createElement("div"); //creates div element at placeholder
    secondDiv.id = "newDiv"; //sets id of new placeholder
    createDiv.appendChild(secondDiv); // appends the div to the page using placeholder and created element
}
function get_pokemon_name() {                           //form submission function that checks for valid inputs
    let form_check = /^[A-Za-z]+$/;
    let input_length = document.getElementById('poke_name').value.length; //gets length of search parameter
    let poke_name = document.getElementById('poke_name').value; //gets value of search parameter
    if ((form_check.test(poke_name) && input_length <= 20) || poke_name.length == 0) {  //check to ensure valid input
        poke_name_search(poke_name);    //call search function
    }
}

function get_pokemon_num() {
    let poke_num = document.getElementById('poke_num').value; //get num  value
    if (poke_num > 0 && poke_num <= 20 || poke_num.length == 0) { //validate inputs
        poke_num_search(poke_num);                                  //call search function
    }
}
function poke_name_search (poke_name){
    let ul = document.getElementById("pokemon");
    let li = ul.getElementsByTagName("li");
    let user_input = poke_name.toLowerCase();
    let newDiv = document.getElementById('newDiv');

    while (newDiv.firstChild) { //removes last child when deleting// adding search parameters
        newDiv.removeChild(newDiv.lastChild);
    }
    for (let i = 0; li.length; i++) { //loops through all elements of list to check for filter
        let a = li[i].getElementsByClassName("name")[0], textValue = a.textContent || a.innerText;
        if (textValue.toLowerCase().indexOf(user_input) > -1 && user_input.length > 0) { //compares if search criteria match
            let listItem = document.createElement("li"); // creates a list element to store searched pokemon
            listItem = li[i].cloneNode(true); //clones the current node that matches search to the new listItem
            listItem.id = "list"; //sets an id to uniquely identify it
            newDiv.appendChild(listItem); //adds list item to new div created above first pokemon
        }
    }
}

function poke_num_search(poke_num) {
    let user_input = poke_num.toLowerCase();
    let ul = document.getElementById("pokemon"); //get unordered list
    let li = ul.getElementsByTagName("li"); //get list elements
    let newDiv = document.getElementById("newDiv"); //get new div element using id
    while (newDiv.firstChild) { //delete last search results each time new searhc is conducted
        newDiv.removeChild(newDiv.lastChild);
    }
    for (let i = 0; li.length; i++) { //search through all pokemon in list
        let b = li[i].getElementsByClassName("number")[0]; //get number of pokemon to check if it matches
        let textValue = b.textContent || b.innerText;
        if (textValue.toLowerCase().indexOf(user_input) > -1 && user_input.length >0 ) { //checks if there is a filter match
            let listItem = document.createElement("li"); //creates list element
            listItem = li[i].cloneNode(true); //clones node to enw list item
            listItem.id = "list"; //creates id to idnteify it
            newDiv.appendChild(listItem); //adds list items to created div
        }
    }
}
