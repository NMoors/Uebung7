function onSubmit (){
    console.log("2");

// if(testeHausnummer()&& testePostleitzahl() && testeEmail()) document.getElementById("Err").innerHTML = "";
// gibLebensdauer();
}

window.onload = function(){
    document.getElementById("Submit").onclick = onSubmit;
    console.log("1");
}



function testeEmail(){
    var e=document.getElementById("Zutaten");
    var regex= /^[a-zA-Z]{2,20}\b/g
    var res = regex.test(e.value);
    if(res == false) document.getElementById("Err").innerHTML = "Zutaten falsch";
    else //auslesen der Zutaten, split @, rezept suchen?
    document.getElementById("Erg").innerHTML = "";
    return res;
}