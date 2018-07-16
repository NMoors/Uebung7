
function weather(){

    var ort = document.getElementById("ort").innerHTML;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        https://www.metaweather.com/api/

        document.getElementById("weather").innerHTML = this.responseText;
    }
    };
 }
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();
