function divCreate() {
    let createDiv = document.getElementById("createDiv");
    let secondDiv = document.createElement("div");
    secondDiv.id = "newDiv";
    createDiv.appendChild(secondDiv);
}
function get_pokemon_name() {
    let form_check = /^[A-Za-z]+$/;
    let input_length = document.getElementById('poke_name').value.length;
    let poke_name = document.getElementById('poke_name').value;
    if ((form_check.test(poke_name) && input_length <= 20) || poke_name.length == 0) {
        poke_name_search(poke_name);
    }
}

function get_pokemon_num() {
    let poke_num = document.getElementById('poke_num').value;
    if (poke_num > 0 && poke_num <= 20 || poke_num.length == 0) {
        poke_num_search(poke_num);
    }
}
function poke_name_search (poke_name){
    let ul = document.getElementById("pokemon");
    let li = ul.getElementsByTagName("li");
    let user_input = poke_name.toLowerCase();
    let newDiv = document.getElementById('newDiv');

    while (newDiv.firstChild) {
        newDiv.removeChild(newDiv.lastChild);
    }
    for (let i = 0; li.length; i++) {
        let a = li[i].getElementsByClassName("name")[0];
        let textValue = a.textContent || a.innerText;
        if (textValue.toLowerCase().indexOf(user_input) > -1 && user_input.length > 0) {
            let listItem = document.createElement("li");
            listItem = li[i].cloneNode(true);
            listItem.id = "list";
            newDiv.appendChild(listItem);
        }
    }
}


function poke_num_search(poke_num) {
    let user_input = poke_num.toLowerCase();
    let ul = document.getElementById("pokemon");
    let li = ul.getElementsByTagName("li");
    let newDiv = document.getElementById("newDiv");
    while (newDiv.firstChild) {
        newDiv.removeChild(newDiv.lastChild);
    }
    for (let i = 0; li.length; i++) {
        let b = li[i].getElementsByClassName("number")[0];
        let textValue = b.textContent || b.innerText;
        if (textValue.toLowerCase().indexOf(user_input) > -1 && user_input.length >0 ) {
            let listItem = document.createElement("li");
            listItem = li[i].cloneNode(true);
            listItem.id = "list";
            newDiv.appendChild(listItem);
        }
    }
}
