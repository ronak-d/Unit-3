function sign_in(){
    window.location.href = "signup.html";
}

function log_in(){
    window.location.href = "login.html";
}


// -IMPORTANT - make sure not to make an function call only assign the function name.
document.getElementById("login_form").addEventListener('submit', log_in);

var signup_data = JSON.parse(localStorage.getItem("add_data"))
console.log(signup_data);


function log_in(event){

    event.preventDefault();
    
    let log_email = document.getElementById("email").value;
    let log_password = document.getElementById("password").value;

    console.log(log_email, log_password);

    // to check sign in == log in we need to make an iteration for that;

    for(i=0; i<signup_data.length; i++) {

        if(signup_data[i].email == log_email && signup_data[i].password == log_password){

            alert("User Logged in Successfully");

           window.location.href="index.html";
        }
        else{
            alert("Please check, User email or password is wrong")
        }
        break;
    }
}



