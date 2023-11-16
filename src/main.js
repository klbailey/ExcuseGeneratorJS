// window.onload = () => {
// window.onload = function(){

//     // document.querySelector('#button').addEventListener("click", () => {
//     //     document.querySelector('#excuse').innerHTML = generateExcuse();
//     // });
// };

window.onclick = function() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying"];
    
    // Generates and returns a random excuse; concatenate one item from each array in the proper order
    //Math.floor rounds number down to nearest integer; Math.random: random number times length of array so it doesn't return greater than array
    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    // call onload() set excuse the innerHTML of #excuse
    document.getElementById("excuse").innerHTML =
        who[whoIndex] + ' ' + action[actionIndex] + ' ' + what[whatIndex] + 
        ' ' + when[whenIndex] + '.';
    // return who[whoIndex] + ' ' + action[actionIndex] + ' ' + what[whatIndex] + ' ' + when[whenIndex] + '.';
    
    // // concatenate one item from each array in the proper order/put together strings
    // document.querySelector("button").addEventListener("click", function() {
    //     document.getElementById("excuse").innerHTML = 
    //     randomArray(who) + " " + randomArray(action) + " " + randomArray(what) + " " + randomArray(when) + ".";
    // });
};
//create onclick function
// window.onclick = function(){
//     let who = ["The dog", "My grandma", "His turtle", "My bird"];
//     let action = ["ate", "peed", "crushed", "broke"];
//     let what = ["my homework", "the keys", "the car"];
//     let when = ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying"];
    
//     // function that generates and returns a random excuse
//     function randomArray(array) {
//         //Math.floor rounds number down to nearest integer; Math.random: random number times length of array so it doesn't return greater than array
//         return array[Math.floor(Math.random() * array.length)];
//     }
    
//     // concatenate one item from each array in the proper order/put together strings
//     document.querySelector("button").addEventListener("click", function() {
//         document.getElementById("excuse").innerHTML = 
//         randomArray(who) + " " + randomArray(action) + " " + randomArray(what) + " " + randomArray(when) + ".";
//     });
// };

