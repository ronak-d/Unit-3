//Store the generated number in LocalStorage with key "number".

function dice(){
    let digit = Math.floor(Math.random()*(7-1)+1);

    console.log(digit);

    localStorage.setItem('number', digit);
    
    window.location.href="display.html"
}