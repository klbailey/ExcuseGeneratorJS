//Reference to html id
const excuse = document.querySelector("#excuse");

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying"];

// function that generates and returns a random excuse
function randomArray(array) {
    let newExcuse;
    //Math.floor rounds number down to nearest integer; Math.random: random number times length of array so it doesn't return greater than array
    newExcuse = array[Math.floor(Math.random() * array.length)];
        return newExcuse;
}

// concatenate one item from each array in the proper order/put together strings
function excuseGenerator(who, action, what, when) {
    let excuse = "";
    excuse = randomArray(who) + " " + randomArray(action) + " " + randomArray(what) + " " + randomArray(when) + ".";
    return excuse;
}

let oneExcuse = excuseGenerator(who, action, what, when);

document.getElementById("excuse").innterHTML = oneExcuse;