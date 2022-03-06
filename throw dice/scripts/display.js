//here retrieve the generated number from Localstorage.

let process = JSON.parse(localStorage.getItem('number'))

console.log(process);

let lap = document.getElementById("show_number");

    let dice = document.createElement('p')
    dice.innerText = process;

    if(dice.innerText == 1){
        dice.style.backgroundColor = "Yellow";
    }
    else if(dice.innerText == 6){
        dice.style.backgroundColor = "Green";
    }
    else{
        dice.style.backgroundColor = "Red";
    }
    console.log(dice);

    lap.append(dice);
    console.log(body_div);







// if(number == 6){
//     div.style.background-color:'green';
// };
// else if(number == 1){
//     div.style.background-color:'yellow';
// }
// else{
//     div.style.background-color='red';
// }

    // digit.forEach(item => {

    //     item.

    // })