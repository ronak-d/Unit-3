function sign_in(){
    window.location.href = "signup.html";
}

function log_in(){
    window.location.href = "login.html";
}

document.getElementById("sign_in_form").addEventListener('submit',signup_form)

// getitem is done to receive previous data from ls also.
let all_data = JSON.parse(localStorage.getItem("add_data")) || [];


function signup_form(input) {

    input.preventDefault();

    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let submit = document.getElementById("submit").value;

    let user_data = {
        name : name,
        number: number,
        email: email,
        password: password,
        submit: submit,
    }

    if(name !== "" && number !== "" && email !== "" && password !== ""){

        // push // userdata in all data - this thong is going inside an array;
        all_data.push(user_data);
        console.log(all_data);

        localStorage.setItem("add_data", JSON.stringify(all_data));

        alert("Sign up Succesfull");

        window.location.href = "index.html"
    }
    else{
        alert("Please enter all the details");
    }
}