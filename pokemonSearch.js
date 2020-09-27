let pokeArray = [
    ["001", "Bulbasaur", "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger."],
    ["002", "Ivysaur", "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs."],
    ["003", "Venusaur", "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."],
    ["004", "Charmander", "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail."],
    ["005", "Charmeleon", "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws."],
    ["006", "Charizard", "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames."],
    ["007", "Squirtle", "When it retracts its long neck into its shell, it squirts out water with vigorous force."],
    ["008", "Wartortle", "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old."],
    ["009", "Blastoise", "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell."],
    ["010", "Caterpie", "For protection, it releases a horrible stench from the antenna on its head to drive away enemies"],
    ["011", "Metapod", "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack."],
    ["012", "Butterfree", "In battle, it flaps its wings at great speed to release highly toxic dust into the air."],
    ["013", "Weedle", "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves."],
    ["014", "Kakuna", "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy."],
    ["015", "Beedrill", "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly."],
    ["016", "Pidgey", "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back."],
    ["017", "Pidgeotto", "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey."],
    ["018", "Pidgeot", "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons."],
    ["019", "Rattata", "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area."],
    ["020", "Raticate", " Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey."]

];

function get_pokemon_name() {
    let form_check = /^[A-Za-z]+$/
    let input_length = document.getElementById('poke_name').value.length;
    let poke_name = document.getElementById('poke_name').value;
    if (form_check.test(poke_name) && input_length <=20)
    {
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
    let user_input = poke_name.toLowerCase();
    let alert_message = "";
    let count = 0;
    for (let i = 0; i < pokeArray.length; i++) {
        if (pokeArray[i][1].toLowerCase().includes(user_input) && count< 5) {
            alert_message += "# " + pokeArray[i][0] + " " + pokeArray[i][1] + " " + pokeArray[i][2] + "\n";
            count++;
        }
    }
    alert(alert_message);

}

function poke_num_search(poke_num) {
    let user_input = poke_num.toLowerCase();
    let alert_message = "";
    for (let i = 0; i < pokeArray.length; i++) {
        if (parseInt(pokeArray[i][0]) == user_input) {
            alert_message += "# " + pokeArray[i][0] + " " + pokeArray[i][1] + " " + pokeArray[i][2] + "\n";
        }
    }
    alert(alert_message);
}

