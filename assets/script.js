"use strict"
let inp = document.querySelector("#inp");
let btn1 = document.querySelector(".btn1");
let random_count = 0;
let output=document.querySelector("#output");
function random1() {



}
function sifre() {
    
    const alphabet = ["A","1", "B", "C", "3","D", "E", "F","5", "G", "H", "I", "J","7", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let answer='';
    for (let i = 0; i < inp.value; i++) {

        answer += alphabet[Math.floor(Math.random() * alphabet.length)];

        
    }
   
    // console.log(answer);
    output.innerHTML=answer;
  
}
btn1.addEventListener("click",sifre);

