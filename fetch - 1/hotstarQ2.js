    //key = b408ff75

    async function searching_movie(){

        // document.getElementById("Search_bar").innerHTML = 

        // always call value inside the function of async //
        const userMovie = document.getElementById("Search_bar").value;
        
        try {
            let res = await fetch(`http://www.omdbapi.com/?apikey=b408ff75&s=${userMovie}`);

            let movie_data = await res.json();

            var send = movie_data.Search;

            console.log(send);

            appenddata(send);

        } 
        catch (error) {
            console.log(error, "movie not found");
        }
    }
    searching_movie();


    function appenddata(send){

        show_movie.innerHTML = "";

        send.forEach((send) => {

            let div = document.getElementById("show_movie");

            let appendInsideThisDiv = document.createElement("div");
            appendInsideThisDiv.setAttribute("id","movieDiv")


            let video = send.Poster;

            let videoTitle = send.Title;

            let videoYear = send.Year;

            let rate = send.imdbID;

            // ------------------------------------------------;
            let img = document.createElement("img");
            img.src = video;
            img.setAttribute("id", "resImg");

            // ----------------------------------------------
            let alignm = document.createElement("div")
            
            let tittle = document.createElement("h3");
            tittle.innerHTML = videoTitle;
            tittle.setAttribute("id", "resTitle");

            let year = document.createElement("h3");
            year.innerHTML = videoYear;
            year.setAttribute("id", "reYear")

            let rating = document.createElement("h3");
            rating.innerHTML= rate;
            rating.setAttribute("id", "reYear");

            alignm.append(tittle,year,rating);

            // ----;
            appendInsideThisDiv.append(img,alignm);

            div.append(appendInsideThisDiv);

        });
    }