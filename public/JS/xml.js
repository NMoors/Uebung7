

function holeFilm(){
    
    var xhttp = new XMLHttpRequest();
  //  var url = "https://ghibliapi.herokuapp.com/films";

    xhttp.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        const i = Math.floor(Math.random()*20);
        obj = JSON.parse(xhttp.responseText);
        //console.log(obj[i].title);
        erg = JSON.stringify(obj[i].title);
        document.getElementById("Erg").innerHTML = erg;
        }
    };
  
    xhttp.open("GET", "https://ghibliapi.herokuapp.com/films", true);

    xhttp.send();
    }   


//obj = JSON.parse(xhttp.responseText); //JSON.parse(body);