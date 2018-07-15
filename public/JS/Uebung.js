var n = 25;
function schleife()
{
    for(var i=1; i<n; i++ ) 
    if (i%10 == 0)  console.log(i + " One more decade: time flies like an arrow! \n");
    else   console.log(i + " \n");
}
schleife(n);

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
