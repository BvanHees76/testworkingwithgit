
const selDiv = document.getElementsByClassName('container')[0];
const selUl = document.getElementsByTagName('ul')[0];
const selBody = document.getElementsByTagName('body')[0];


const selliWhite = document.getElementById('whiteColor');
const selliRed = document.getElementById('redColor');
const selliOrange = document.getElementById('orangeColor');
const selliPurple = document.getElementById('purpleColor');
const selliGreen = document.getElementById('greenColor');

//rood = '#e81627';
//oranje = '#f2db07';
//paars = '#ee07f2';
//groen = '#07f22a';


//activeert en sluit menu wanneer over de div wordt gehovered
selDiv.addEventListener('mouseover', function(){
selUl.style.visibility='visible';
});

selDiv.addEventListener('mouseout', function(){
selUl.style.visibility='hidden';
});




// als op het li wordt geklikt dan veranderd de bg-color en sluit het menu
let whiteBackground = function(){
selBody.style.backgroundColor = '#ffffff';
selUl.style.visibility='hidden';
};


let redBackground = function(){
selBody.style.backgroundColor = '#e81627';
selUl.style.visibility='hidden';
};

let orangeBackground = function(){
selBody.style.backgroundColor = '#f2db07';
selUl.style.visibility='hidden';  
};

let purpleBackground = function(){
selBody.style.backgroundColor = '#ee07f2';
selUl.style.visibility='hidden';
};

let greenBackground = function(){
selBody.style.backgroundColor = '#07f22a';
selUl.style.visibility='hidden';
};



selliWhite.addEventListener('click', whiteBackground); 

selliRed.addEventListener('click', redBackground); 

selliOrange.addEventListener('click', orangeBackground);

selliPurple.addEventListener('click', purpleBackground);

selliGreen.addEventListener('click', greenBackground);
   