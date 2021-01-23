var str = "Campionatul Mondial de Fotbal sau Cupa Mondială FIFA (în engleză FIFA World Cup) este cea mai importantă competiție fotbalistică disputată între echipele naționale de fotbal. Competiția se desfășoară în sistem de cupă, și este împărțită în faza preliminară (calificări) și turneul final. Preliminariile se dispută pe durata a 1 an, fiecare continent având propriile reguli de calificare. Turneul final are loc o dată la 4 ani și se dispută la începutul verii pe durata unei luni (aproximativ). Țara organizatoare a turneului final este desemnată de FIFA cu cel puțin 4 ani înainte. Prima ediție a avut loc în anul 1930 în Uruguay, iar cea mai recentă în 2018 în Rusia. Ediția din 2002 a fost prima din istoria competiției care a avut două țări organizatoare: Japonia și Coreea de Sud. Următoarele două ediții vor fi găzduite de Qatar în 2022 si Statele Unite Ale Americii ,Canada si Mexico in 2026 , fiind prima editie care este organizata de trei țări. Campionatul Mondial de Fotbal este unul dintre cele mai importante evenimente sportive ale planetei.";
var cuvinte = str.split(" ");
var str2= "Brazilienii au construit cel mai mare stadion al lumii, Maracanã, fiind determinați să organizeze Campionatul Mondial în ediția 1950. Totuși, visul lor de a deveni campioni mondiali s-a năruit chiar pe acest stadion, Uruguay câștigând cel de-al doilea titlu în fața a 175.000 de oameni uluiți. Nu a fost singura surpriză a turneului deoarece, debutanta Anglia, a fost învinsă de Statele Unite cu 1-0.";
var cuvinte2= str2.split(" ");
//console.log(cuvinte);
/*
var intervalID = setInterval(function(){
    if(cuvinte.length==0 && cuvinte2.length==0)
        return clearInterval(intervalID)
    else if(cuvinte.length!=0)
        document.getElementById("task2").innerHTML += " " + cuvinte.shift();
    else 
        document.getElementById("task2.1").innerHTML += " " + cuvinte2.shift();

},333);//MAI INTAI PRIMUL SI APOI AL DOILEA, PE RAND
*/
var intervalID = setInterval(function(){
    if(cuvinte.length==0 && cuvinte2.length==0 )
        return clearInterval(intervalID)
    else if(cuvinte.length!=0)
        document.getElementById("task2").innerHTML += " " + cuvinte.shift();
    if(cuvinte.length==0 && cuvinte2.length==0 )
        return clearInterval(intervalID)
    else if(cuvinte2.length!=0)
        document.getElementById("task2.1").innerHTML += " " + cuvinte2.shift();

},333);//AMANDOUA SIMULTAN

//TASK 2 NIVEL 2
