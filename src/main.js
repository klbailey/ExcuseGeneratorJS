//Reference to html id
// const excuse = document.querySelector("#excuse");
//create onclick function
window.onclick = function(){
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying"];
    
    // function that generates and returns a random excuse
    function randomArray(array) {
        //Math.floor rounds number down to nearest integer; Math.random: random number times length of array so it doesn't return greater than array
        let newExcuse = array[Math.floor(Math.random() * array.length)];
    }
    
    // concatenate one item from each array in the proper order/put together strings
 
    document.getElementById("excuse").innerHTML = 
    randomArray(who) + " " + randomArray(action) + " " + randomArray(what) + " " + randomArray(when) + ".";

    
};

