// ==========================================
// ONE LAST CONVERSATION
// SCRIPT.JS
// ==========================================

// Pages
const pages = document.querySelectorAll(".page");

const introPage = document.getElementById("introPage");
const letterPage = document.getElementById("letterPage");
const memoryPage = document.getElementById("memoryPage");
const unsaidPage = document.getElementById("unsaidPage");
const finalPage = document.getElementById("finalPage");
const goodbyePage = document.getElementById("goodbyePage");

// Buttons
const startBtn = document.getElementById("startBtn");
const letterNext = document.getElementById("letterNext");
const unsaidNext = document.getElementById("unsaidNext");
const finishBtn = document.getElementById("finishBtn");
const restartBtn = document.getElementById("restartBtn");

// Letter
const letter = document.getElementById("letter");
const letterFront = document.querySelector(".letterFront");
const letterInside = document.querySelector(".letterInside");

// Music
const bgMusic = document.getElementById("bgMusic");
const memoryMusic = document.getElementById("memoryMusic");

// ==========================================
// PAGE CHANGE
// ==========================================

function showPage(page){

pages.forEach(p=>{

p.classList.remove("active");

});

page.classList.add("active");

}

// ==========================================
// STARS
// ==========================================

const stars=document.getElementById("stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";
star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*4+"s";

stars.appendChild(star);

}

// ==========================================
// PETALS
// ==========================================

const petals=document.getElementById("petals");

for(let i=0;i<18;i++){

const petal=document.createElement("div");

petal.className="petal";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=
(8+Math.random()*6)+"s";

petal.style.animationDelay=
Math.random()*5+"s";

petals.appendChild(petal);

}

// ==========================================
// START WEBSITE
// ==========================================

startBtn.onclick=()=>{

bgMusic.volume=.5;

bgMusic.play().catch(()=>{});

showPage(letterPage);

};

// ==========================================
// LETTER OPEN
// ==========================================

letter.onclick=()=>{

letterFront.classList.add("letterOpen");

setTimeout(()=>{

letterFront.style.display="none";

letterInside.style.display="block";

},900);

};

// ==========================================
// LETTER NEXT
// ==========================================

letterNext.onclick=()=>{

bgMusic.pause();

memoryMusic.volume=.6;

memoryMusic.play();

showPage(memoryPage);

};


// ==========================================
// MEMORIES GALLERY
// ==========================================

const memoryImage = document.getElementById("memoryImage");
const memoryTitle = document.getElementById("memoryTitle");
const memoryText = document.getElementById("memoryText");

const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");

const counter = document.getElementById("counter");

// ==========================

const memories=[

{

image:"assets/photo1.jpg",

title:"The First Memory",

text:"Some smiles never leave your heart."

},

{

image:"assets/photo2.jpg",

title:"A Beautiful Moment",

text:"Some memories stay beautiful forever."

},

{

image:"assets/photo3.jpg",

title:"Happiness",

text:"A single picture can hold thousands of emotions."

},

{

image:"assets/photo4.jpg",

title:"The Smile",

text:"Some smiles become unforgettable."

},

{

image:"assets/photo5.jpg",

title:"Little Moments",

text:"The smallest memories often become the biggest."

},

{

image:"assets/photo6.jpg",

title:"Time",

text:"Time moves forward, memories don't."

},

{

image:"assets/photo7.jpg",

title:"One Last Memory",

text:"Maybe this wasn't the ending I wished for."

}

];

// ==========================

let currentPhoto=0;

let galleryInterval;

// ==========================

function updateGallery(){

memoryImage.style.opacity=0;

setTimeout(()=>{

memoryImage.src=memories[currentPhoto].image;

memoryTitle.textContent=memories[currentPhoto].title;

memoryText.textContent=memories[currentPhoto].text;

counter.textContent=(currentPhoto+1)+" / "+memories.length;

memoryImage.style.opacity=1;

},300);

}

// ==========================

function nextMemory(){

currentPhoto++;

if(currentPhoto>=memories.length){

currentPhoto=0;

}

updateGallery();

}

// ==========================

function previousMemory(){

currentPhoto--;

if(currentPhoto<0){

currentPhoto=memories.length-1;

}

updateGallery();

}

// ==========================

updateGallery();

// ==========================

galleryInterval=setInterval(()=>{

if(memoryPage.classList.contains("active")){

nextMemory();

}

},5000);

// ==========================

nextPhoto.onclick=()=>{

nextMemory();

};

// ==========================

prevPhoto.onclick=()=>{

previousMemory();

};

// ==========================================
// THINGS I NEVER SAID
// ==========================================

const typewriter = document.getElementById("typewriter");

const unsaidMessages=[

"I know silence cannot fix what happened.",

"I know time has changed many things.",

"But one conversation can change everything.",

"I'm not asking you to forget.",

"I'm only asking for one last conversation."

];

let line=0;
let letterIndex=0;

function typeEffect(){

if(line>=unsaidMessages.length)return;

if(letterIndex<unsaidMessages[line].length){

typewriter.innerHTML+=unsaidMessages[line].charAt(letterIndex);

letterIndex++;

setTimeout(typeEffect,45);

}else{

typewriter.innerHTML+="<br><br>";

line++;

letterIndex=0;

setTimeout(typeEffect,700);

}

}

// ==========================================
// GALLERY TO UNSAID
// ==========================================

counter.onclick=()=>{

memoryMusic.pause();

bgMusic.play();

showPage(unsaidPage);

typewriter.innerHTML="";

line=0;

letterIndex=0;

typeEffect();

};

// ==========================================
// CONTINUE
// ==========================================

unsaidNext.onclick=()=>{

showPage(finalPage);

};

// ==========================================
// FINAL PAGE
// ==========================================

finishBtn.onclick=()=>{

showPage(goodbyePage);

};

// ==========================================
// RESTART
// ==========================================

restartBtn.onclick=()=>{

memoryMusic.pause();

bgMusic.pause();

bgMusic.currentTime=0;

memoryMusic.currentTime=0;

currentPhoto=0;

updateGallery();

letterFront.style.display="flex";

letterFront.classList.remove("letterOpen");

letterInside.style.display="none";

showPage(introPage);

};

// ==========================================
// IMAGE PRELOAD
// ==========================================

memories.forEach(item=>{

const img=new Image();

img.src=item.image;

});

// ==========================================
// AUTO START
// ==========================================

showPage(introPage);

