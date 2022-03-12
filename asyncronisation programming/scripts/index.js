function sign_in(){
    window.location.href = "signup.html";
}

function log_in(){
    window.location.href = "login.html";
}

async function movies() {

    let res = await fetch(`https://www.omdbapi.com/?apikey=b408ff75&s=avengers`);

    let data = await res.json();

    let bhejo = data.Search;
    console.log(bhejo);

    append_data(bhejo);

}

movies()
function append_data(bhejo){

    movies.innerHTML = null;

    bhejo.forEach((send) => {

        let div = document.getElementById("movies");

        let appendInsideThisDiv = document.createElement("div");
        appendInsideThisDiv.setAttribute("id","movieDiv")

        // ------------------------------------------------;
        let img = document.createElement("img");
        img.src = send.Poster;
        img.setAttribute("id", "resImg");

        // ----------------------------------------------
        let alignm = document.createElement("div")
        
        let tittle = document.createElement("h3");
        tittle.innerHTML = send.Title;
        tittle.setAttribute("id", "resTitle");

        let year = document.createElement("h3");
        year.innerHTML = send.Year;
        year.setAttribute("id", "reYear")

        let rating = document.createElement("h3");
        rating.innerHTML= send.imdbID;
        rating.setAttribute("id", "reYear");

        alignm.append(tittle,year,rating);

        appendInsideThisDiv.append(img,alignm);

        div.append(appendInsideThisDiv);

    });
}