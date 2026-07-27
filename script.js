// ======================================
// ONE LAST CONVERSATION
// SCRIPT.JS
// ======================================

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
const letterBtn = document.getElementById("letterBtn");
const memoryContinue = document.getElementById("memoryContinue");
const unsaidBtn = document.getElementById("unsaidBtn");
const finishBtn = document.getElementById("finishBtn");
const restartBtn = document.getElementById("restartBtn");

// Letter
const letter = document.getElementById("letter");
const letterFront = document.querySelector(".letterFront");
const letterInside = document.querySelector(".letterInside");

// Music
const bgMusic = document.getElementById("bgMusic");
const memoryMusic = document.getElementById("memoryMusic");

// ================================
// PAGE SWITCH
// ================================

function showPage(page){

pages.forEach(p=>{

p.classList.remove("active");

});

page.classList.add("active");

}

// ================================
// STARS
// ================================

const stars=document.getElementById("stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*3+"s";

stars.appendChild(star);

}

// ================================
// PETALS
// ================================

const petals=document.getElementById("petals");

for(let i=0;i<18;i++){

const petal=document.createElement("div");

petal.className="petal";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(8+Math.random()*6)+"s";

petal.style.animationDelay=Math.random()*5+"s";

petals.appendChild(petal);

}

// ================================
// START WEBSITE
// ================================

startBtn.onclick=()=>{

bgMusic.volume=.5;

bgMusic.play().catch(()=>{});

showPage(letterPage);

};

// ================================
// OPEN LETTER
// ================================

letter.onclick=()=>{

letterFront.classList.add("letterOpen");

setTimeout(()=>{

letterFront.style.display="none";

letterInside.style.display="block";

},900);

};

// ================================
// LETTER → MEMORIES
// ================================

letterBtn.onclick=()=>{

bgMusic.pause();

memoryMusic.volume=.5;

memoryMusic.play();

showPage(memoryPage);

galleryIndex=0;

showGallery();

clearInterval(galleryTimer);

galleryTimer=setInterval(nextGallery,5000);

};

// ======================================
// MEMORIES GALLERY
// ======================================

const memoryImage = document.getElementById("memoryImage");
const memoryTitle = document.getElementById("memoryTitle");
const memoryText = document.getElementById("memoryText");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const counter = document.getElementById("counter");

// ================================

const gallery=[

{
image:"photo1.jpg",
title:"The First Smile",
text:"Some smiles stay in our hearts forever."
},

{
image:"photo2.jpg",
title:"A Beautiful Day",
text:"The smallest moments become the biggest memories."
},

{
image:"photo3.jpg",
title:"Peace",
text:"Some memories don't fade even after time passes."
},

{
image:"photo4.jpg",
title:"Happiness",
text:"Your happiness was always enough for me."
},

{
image:"photo5.jpg",
title:"Golden Moments",
text:"Every picture tells a story words never could."
},

{
image:"photo6.jpg",
title:"Time",
text:"Time changed everything except these memories."
},

{
image:"photo7.jpg",
title:"One Last Memory",
text:"I only wished we could have one last conversation."
}

];

// ================================

let galleryIndex=0;

let galleryTimer;

// ================================

function showGallery(){

memoryImage.classList.remove("photoFade");

void memoryImage.offsetWidth;

memoryImage.src=gallery[galleryIndex].image;

memoryTitle.textContent=gallery[galleryIndex].title;

memoryText.textContent=gallery[galleryIndex].text;

counter.textContent=(galleryIndex+1)+" / "+gallery.length;

memoryImage.classList.add("photoFade");

}

// ================================

function nextGallery(){

galleryIndex++;

if(galleryIndex>=gallery.length){

galleryIndex=0;

}

showGallery();

}

// ================================

function previousGallery(){

galleryIndex--;

if(galleryIndex<0){

galleryIndex=gallery.length-1;

}

showGallery();

}

// ================================

nextBtn.onclick=()=>{

nextGallery();

clearInterval(galleryTimer);

galleryTimer=setInterval(nextGallery,5000);

};

// ================================

prevBtn.onclick=()=>{

previousGallery();

clearInterval(galleryTimer);

galleryTimer=setInterval(nextGallery,5000);

};

// ================================

memoryContinue.onclick=()=>{

clearInterval(galleryTimer);

memoryMusic.pause();

bgMusic.currentTime=0;

bgMusic.play();

showPage(unsaidPage);

startTypewriter();

};


// ======================================
// TYPEWRITER
// ======================================

const typewriter=document.getElementById("typewriter");

const unsaidLines=[

"I know I made mistakes.",

"I know I hurt you.",

"I know time cannot change the past.",

"But maybe one conversation can change tomorrow.",

"I'm not asking you to forget.",

"I'm only asking for one last conversation."

];

let lineIndex=0;
let charIndex=0;

function typeWriter(){

if(lineIndex>=unsaidLines.length){

return;

}

let line=unsaidLines[lineIndex];

if(charIndex<line.length){

typewriter.innerHTML+=line.charAt(charIndex);

charIndex++;

setTimeout(typeWriter,40);

}else{

typewriter.innerHTML+="<br><br>";

lineIndex++;

charIndex=0;

setTimeout(typeWriter,700);

}

}

function startTypewriter(){

typewriter.innerHTML="";

lineIndex=0;

charIndex=0;

typeWriter();

}

// ======================================
// UNSAID → FINAL
// ======================================

unsaidBtn.onclick=()=>{

showPage(finalPage);

};

// ======================================
// FINAL → THANK YOU
// ======================================

finishBtn.onclick=()=>{

showPage(goodbyePage);

};

// ======================================
// RESTART
// ======================================

restartBtn.onclick=()=>{

clearInterval(galleryTimer);

bgMusic.pause();
memoryMusic.pause();

bgMusic.currentTime=0;
memoryMusic.currentTime=0;

galleryIndex=0;

showGallery();

letterFront.style.display="flex";
letterFront.classList.remove("letterOpen");
letterInside.style.display="none";

showPage(introPage);

};

// ======================================
// PRELOAD IMAGES
// ======================================

gallery.forEach(item=>{

const img=new Image();

img.src=item.image;

});

// ======================================
// INITIAL PAGE
// ======================================

showPage(introPage);
