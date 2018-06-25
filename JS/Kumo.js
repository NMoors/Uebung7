var myCanvas
var myContext;
var clouds;
var mousePos = {x:1000, y:1000};

// --------------Cloud-Objekte
function cloud(centerx, centery, circles){
	this.centerx = centerx;
	this.centery = centery;
	this.mausNaehe =0;
	
	// erzeuge einige random Kreise, aus der die Wolke zusammengesetzt ist
	this.circles = [];
	for(i = 0; i<circles; i++){
		this.circles.push({
			radius : Math.random()*12+5,
			offx : Math.random()*50-25,
			offy : Math.random()*25-12
		})
	}
	this.color = "rgba(210, 240,240,0.3)";
	
}

cloud.prototype.draw = function() {
	//male alle kreise, aus der die wolke zusammengesetzt ist
	time = performance.now()/1000;
	//console.log(Math.sin(time));
	
	//male jeden Kreis der Wolke
	for(i=0; i<this.circles.length;i++){
		//die kreise sollen ihre groesse ueber die zeit veraendern
		scale = Math.sin(2*time+i)*0.2 + 0.2 + 0.6;
		myContext.beginPath();
		myContext.arc(this.centerx+this.circles[i].offx, 
				this.centery+this.circles[i].offy,
				this.circles[i].radius* scale, 0,2*Math.PI);
		myContext.fillStyle = this.color;
		myContext.fill();
	}
	
	//-----------------------------------
	visibility=this.mausNaehe;
	//male ein gesicht fuer die wolke, wenn die Maus nah ist
	myContext.beginPath();
	myContext.arc(this.centerx+10, this.centery, 3,0,2*Math.PI);
	myContext.fillStyle = "rgba(0,0,0,"+visibility+")";
	myContext.fill();
	
	myContext.beginPath();
	myContext.arc(this.centerx-10, this.centery, 3,0,2*Math.PI);
	myContext.fillStyle = "rgba(0,0,0,"+visibility+")";
	myContext.fill();
	
	myContext.beginPath();
	myContext.arc(this.centerx, this.centery+6, 3,0,Math.PI);
	myContext.strokeStyle = "rgba(180,0,0,"+visibility+")";
	myContext.stroke();
};

cloud.prototype.update = function() {
	// eine Wolke soll der maus folgen, wenn die maus nahe dran ist
	// wie nah ist die maus auf einer Skala von 0-1? gemessen an den halben canvas-dimensionen
	xdiff = Math.abs(this.centerx - mousePos.x)/(myCanvas.width/8);
	ydiff = Math.abs(this.centery - mousePos.y)/(myCanvas.height/8);
	if(xdiff>1)
		xdiff=1;
	if(ydiff>1)
		ydiff=1;
	entfernung = (xdiff*xdiff + ydiff*ydiff);
	if(entfernung>1) 
		entfernung = 1;
	
	//wolke soll sich auf maus hinzubewegen
	this.centerx = lerp(this.centerx, mousePos.x, (1.0-entfernung)*0.01 );
	this.centery = lerp(this.centery, mousePos.y, (1.0-entfernung)*0.01 );
	this.mausNaehe = 1.0-entfernung;
	//console.log(entfernung);
	
}
// ------- Ende Cloud Objekte
// -------------


// der eigentliche Einstiegspunkt nach dem laden der webseite
window.onload = function(){
	
	myCanvas = document.getElementById("myCanvas");
	myContext = myCanvas.getContext("2d");

	clouds = [];
	clouds.push(new cloud(50, 50, 60));
	clouds.push(new cloud(250, 150, 60));
	clouds.push(new cloud(450, 150, 60));
	clouds.push(new cloud(500, 30, 60));
	clouds.push(new cloud(500, 350, 60));
	clouds.push(new cloud(100, 350, 60));
	
	myAnimation();

	zaehlen();
}



function myAnimation() {
	
	//Canvas sauber radieren
	myContext.clearRect(0, 0, myCanvas.width, myCanvas.height);
	
	//wolken updaten und dann zeichnen
	var i=0;
	for(i=0; i<clouds.length; i++){
		clouds[i].update();
		clouds[i].draw();
	}

	// Animationsfunktion ruft sich rekursiv in jedem Frame selbst auf:
	requestAnimationFrame(myAnimation);
}


//ein eventlistener der die aktuellste mouseposition in ein globales objekt schreibt
window.addEventListener('mousemove', mousePosUpdate, false);
function mousePosUpdate(evt){
	var rect = myCanvas.getBoundingClientRect();
    mousePos = {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
    };
}

// lineare interpolation
function lerp(a,b,t){
	return a*(1.0-t)+b*t;
}

