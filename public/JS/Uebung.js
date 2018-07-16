

var zahlen = [];
function zaehlen(){
    var kleinste = 100000;
    var groeste = -100000;
    for(var i = 0; i <  1000; i++){
       zahlen[i] = Math.floor(Math.random()* 1000);
    }

    
	for(var j = 0; j <  zahlen.length; j++){
	   if(kleinste > zahlen[j]){
        //console.log(kleinste)
            kleinste = zahlen[j];
            //document.getElementById("kl").innerHTML = kleinste;
	   }
	   if (groeste < zahlen[j]){
		   groeste = zahlen[j];
       }
       

    }
    
    document.getElementById("kl").innerHTML = kleinste;
    document.getElementById("gr").innerHTML = groeste;
}
zaehlen();

