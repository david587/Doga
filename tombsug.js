//
// File: tombsug.js
// Author: Baráth Dávid
// Copyright: 2022, Baráth Dávid
// Group: Szoft 1/N
// Date: 2022-02-28
// Github: https://github.com/david587/
// Licenc: GNU GPL
//
console.log("Baráth Dávid,Szoft1/N,2022.02.28");
var anyagIn= document.getElementById("anyag");
var anyagInn= document.getElementById("anyag1");
var szamitgomb= document.getElementById("szamitgomb");
var eredmenyIn =document.getElementById("eredmeny");

szamitgomb.addEventListener("click", function(){
    let anyag = Number(anyagIn.value);
    let anyagg=Number(anyagInn.value);
    var absz = (Math.PI/180)*(anyagg);
    let reszecske = (1/2)*anyag*Math.sin(absz);
    console.log(reszecske.toFixed(2));
    eredmenyIn.value=reszecske.toFixed(2);
});
