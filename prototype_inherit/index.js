//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

let construct_info = {
     one : "contructor functions acts as a blueprint which can be used again and again",
     two : "This function use to create multiple objects ",
     three : "This function are capable to pass parameters to the objects value",
     four : "to use CF we need to use this. keyword as it points at that parent function",
}

 let set = localstorage.setItem(constructor_function, construct_info);
//Information should be retrieved from localstorage only, avoid hard coding data.


document.getElementById("scope").addEventListener('click', (input) => {
    console.log("clicked");
    let get = localstorage.getItem(JSON.parse(constructor_function));
    
    let main = document.getElementById("info");
    
    let para = document.createElement('p');
    para.textContent = get;

    main.append(para);
})

