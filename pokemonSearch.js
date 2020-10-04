function divCreate(){
    let createDiv = document.getElementById("createDiv");
    let secondDiv = document.createElement("div");
    secondDiv.id = "newDiv";
    createDiv.appendChild(secondDiv);


}
function get_pokemon_name() {
    let form_check = /^[A-Za-z]+$/
    let input_length = document.getElementById('poke_name').value.length;
    let poke_name = document.getElementById('poke_name').value;
    if (form_check.test(poke_name) && input_length <= 20) {
        poke_name_search(poke_name);
    }
}

function get_pokemon_num() {
    let poke_num = document.getElementById('poke_num').value;
    if (poke_num > 0 && poke_num <= 20) {
        poke_num_search(poke_num);
    }
}

function poke_name_search(poke_name) {
    let ul = document.getElementById("pokemon");
    let li = ul.getElementsByTagName("li");
    let user_input = poke_name.toLowerCase();
    let newDiv = document.getElementById('newDiv');

    for (let i = 0; li.length; i++) {
        let a = li[i].getElementsByClassName("name")[0];
        let textValue = a.textContent || a.innerText;
        if (textValue.toLowerCase().indexOf(user_input) > -1) {
            let listItem = document.createElement("ul");
            listItem = li[i].cloneNode(true);
            listItem.id = "searchList";
;            newDiv.appendChild(listItem);
        } else {
            //li[i].style.display = "none"
        }
    }
}

//function poke_num_search(poke_num) {
//let user_input = poke_num.toLowerCase();
// for (let i = 0; i < pokeArray.length; i++) {
// if (parseInt(pokeArray[i][0]) == user_input) {
//  alert_message += "# " + pokeArray[i][0] + " " + pokeArray[i][1] + " " + pokeArray[i][2] + "\n";
// }
// }
//}

