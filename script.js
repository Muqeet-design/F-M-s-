// ==========================================
// One Last Conversation
// SCRIPT.JS
// ==========================================

// Pages
const introPage = document.getElementById("introPage");
const letterPage = document.getElementById("letterPage");
const memoryPage = document.getElementById("memoryPage");
const unsaidPage = document.getElementById("unsaidPage");
const finalPage = document.getElementById("finalPage");
const goodbyePage = document.getElementById("goodbyePage");

// Buttons
const startBtn = document.getElementById("startBtn");
const continueToMemories = document.getElementById("continueToMemories");

// Letter
const letter = document.getElementById("letter");
const letterFront = document.querySelector(".letterFront");
const letterInside = document.querySelector(".letterInside");

// Music
const bgMusic = document.getElementById("bgMusic");
const memoryMusic = document.getElementById("memoryMusic");

// ==========================================
// STARS
// ==========================================

const stars = document.getElementById("stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*3+"s";

star.style.opacity=Math.random();

stars.appendChild(star);

}

// ==========================================
// PAGE CHANGE
// ==========================================

function showPage(page){

introPage.classList.add("hidden");
letterPage.classList.add("hidden");
memoryPage.classList.add("hidden");
unsaidPage.classList.add("hidden");
finalPage.classList.add("hidden");
goodbyePage.classList.add("hidden");

page.classList.remove("hidden");

}

// ==========================================
// START
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

letterFront.style.transform="rotateX(-180deg)";

setTimeout(()=>{

letterFront.style.display="none";

letterInside.style.display="block";

},800);

};

// ==========================================
// CONTINUE
// ==========================================

continueToMemories.onclick=()=>{

showPage(memoryPage);

};

// ==========================================
// MEMORIES GALLERY
// ==========================================

const memoryImage = document.getElementById("memoryImage");
const memoryCaption = document.getElementById("memoryCaption");
const photoCount = document.getElementById("photoCount");

const previousPhoto = document.getElementById("previousPhoto");
const nextPhoto = document.getElementById("nextPhoto");

const continueAfterGallery = document.getElementById("continueAfterGallery");

const gallery=[

{
image:"assets/photo1.jpg",
text:"Some smiles never leave your memory."
},

{
image:"assets/photo2.jpg",
text:"Some moments become memories without warning."
},

{
image:"assets/photo3.jpg",
text:"The happiest memories are often the quietest ones."
},

{
image:"assets/photo4.jpg",
text:"Some people become a beautiful chapter of our lives."
},

{
image:"assets/photo5.jpg",
text:"Even silence remembers certain moments."
},

{
image:"assets/photo6.jpg",
text:"Time moved on... but these memories stayed."
},

{
image:"assets/photo7.jpg",
text:"I only wished we could have one more conversation."
}

];

let galleryIndex=0;

let galleryTimer;

// ==========================================

function showGallery(){

memoryImage.classList.remove("photoIn");

void memoryImage.offsetWidth;

memoryImage.src=gallery[galleryIndex].image;

memoryCaption.textContent=gallery[galleryIndex].text;

photoCount.textContent=(galleryIndex+1)+" / "+gallery.length;

memoryImage.classList.add("photoIn");

}

// ==========================================

function nextGallery(){

galleryIndex++;

if(galleryIndex>=gallery.length){

clearInterval(galleryTimer);

memoryMusic.pause();

bgMusic.volume=.5;

bgMusic.play();

showPage(unsaidPage);

return;

}

showGallery();

}

// ==========================================

function previousGallery(){

galleryIndex--;

if(galleryIndex<0){

galleryIndex=0;

}

showGallery();

}

// ==========================================

continueToMemories.onclick=()=>{

bgMusic.pause();

memoryMusic.volume=.6;

memoryMusic.play();

galleryIndex=0;

showGallery();

showPage(memoryPage);

galleryTimer=setInterval(nextGallery,5000);

};

// ==========================================

nextPhoto.onclick=()=>{

clearInterval(galleryTimer);

nextGallery();

galleryTimer=setInterval(nextGallery,5000);

};

// ==========================================

previousPhoto.onclick=()=>{

clearInterval(galleryTimer);

previousGallery();

galleryTimer=setInterval(nextGallery,5000);

};

// ==========================================

continueAfterGallery.onclick=()=>{

clearInterval(galleryTimer);

memoryMusic.pause();

bgMusic.play();

showPage(unsaidPage);

};

// ==========================================
// THINGS I NEVER SAID
// ==========================================

const typewriterText =
document.getElementById("typewriterText");

const continueToFinal =
document.getElementById("continueToFinal");

const finishBtn =
document.getElementById("finishBtn");

const watchAgain =
document.getElementById("watchAgain");

const messages = [

"I should have listened more.",

"I should have understood your silence.",

"I never wanted distance between us.",

"Some things were left unsaid.",

"I only wished we could talk once."

];

let messageIndex = 0;
let charIndex = 0;

// ==========================================

function typeWriter(){

if(messageIndex >= messages.length){

return;

}

let currentMessage =
messages[messageIndex];

if(charIndex < currentMessage.length){

typewriterText.innerHTML +=
currentMessage.charAt(charIndex);

charIndex++;

setTimeout(typeWriter,50);

}
else{

typewriterText.innerHTML +=
"<br><br>";

messageIndex++;

charIndex=0;

setTimeout(typeWriter,1000);

}

}

// ==========================================
// START TYPEWRITER
// ==========================================

function startTypewriter(){

typewriterText.innerHTML="";

messageIndex=0;

charIndex=0;

typeWriter();

}

// ==========================================
// CONTINUE TO FINAL PAGE
// ==========================================

continueToFinal.onclick=()=>{

showPage(finalPage);

};

// ==========================================
// FINISH BUTTON
// ==========================================

finishBtn.onclick=()=>{

showPage(goodbyePage);

};

// ==========================================
// READ AGAIN
// ==========================================

watchAgain.onclick=()=>{

showPage(introPage);

galleryIndex=0;

bgMusic.currentTime=0;
memoryMusic.currentTime=0;

};

// ==========================================
// UNSAID PAGE OPEN
// ==========================================

const oldShowPage = showPage;

showPage = function(page){

introPage.classList.add("hidden");
letterPage.classList.add("hidden");
memoryPage.classList.add("hidden");
unsaidPage.classList.add("hidden");
finalPage.classList.add("hidden");
goodbyePage.classList.add("hidden");

page.classList.remove("hidden");

if(page===unsaidPage){

startTypewriter();

}

};

// ==========================================
// FALLING PETALS
// ==========================================

for(let i=0;i<20;i++){

const petal =
document.createElement("div");

petal.classList.add("petal");

petal.style.left =
Math.random()*100+"vw";

petal.style.animationDuration =
(8+Math.random()*8)+"s";

petal.style.animationDelay =
Math.random()*5+"s";

document.body.appendChild(petal);

}
