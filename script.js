
/* =====================================================
   THE LAST BLOOM — FOR MUSFIRAH
   script.js
   Version 1.0
===================================================== */

// =============================
// ELEMENTS
// =============================

const screens = document.querySelectorAll(".screen");

const bgMusic = document.getElementById("bgMusic");
const galleryMusic = document.getElementById("galleryMusic");
const clickSound = document.getElementById("clickSound");

const startButton = document.getElementById("startButton");
const enterWebsite = document.getElementById("enterWebsite");

const loadingScreen = document.getElementById("loadingScreen");
const loadingProgress = document.getElementById("loadingProgress");
const musicOverlay = document.getElementById("musicOverlay");

// =============================
// LOADING
// =============================

let percent = 0;

const loader = setInterval(() => {

    percent++;

    loadingProgress.style.width = percent + "%";

    if (percent >= 100) {

        clearInterval(loader);

        setTimeout(() => {

            loadingScreen.style.display = "none";
            musicOverlay.style.display = "flex";

        }, 500);

    }

}, 25);

// =============================
// MUSIC
// =============================

enterWebsite.onclick = () => {

    bgMusic.volume = 0.5;

    bgMusic.play().catch(() => {});

    musicOverlay.style.display = "none";

};

function clickFX() {

    clickSound.currentTime = 0;

    clickSound.play().catch(() => {});

}

// =============================
// SCREEN CHANGE
// =============================

function showScreen(id) {

    screens.forEach(screen => {

        screen.classList.remove("active");

    });

    document
        .getElementById(id)
        .classList.add("active");

}

function smoothScreen(id) {

    const active = document.querySelector(".screen.active");

    active.animate(

        [
            {
                opacity: 1,
                transform: "scale(1)"
            },
            {
                opacity: 0,
                transform: "scale(.96)"
            }

        ],

        {
            duration: 700,
            fill: "forwards"
        }

    ).onfinish = () => {

        showScreen(id);

    };

}

// =============================
// START BUTTON
// =============================

startButton.onclick = () => {

    clickFX();

    smoothScreen("envelope");

};

// =============================
// CURSOR GLOW
// =============================

const glow = document.getElementById("cursorGlow");

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

/* =====================================================
   ENVELOPE SYSTEM
===================================================== */

const envelope =
document.getElementById("envelopeBox");

const flap =
document.getElementById("flap");

const letter =
document.getElementById("letter");

envelope.onclick = () => {

clickFX();

/* Open Animation */

envelope.classList.add("open");

/* Petal Burst */

for(let i=0;i<35;i++){

setTimeout(()=>{

createPetal();

},i*40);

}

/* Move To Story */

setTimeout(()=>{

smoothScreen("story");

startStory();

},2200);

};

/* =====================================================
   STORY BOOK
===================================================== */

const storyText =
document.getElementById("storyText");

const nextStory =
document.getElementById("nextStory");

const page =
document.querySelector(".page");

const storyPages=[

"Hi Musfirah ❤️\n\nThere are some feelings that words could never fully explain.",

"Every memory with you still blooms inside my heart like the first flower of spring.",

"I know life changes people, places and time... but beautiful memories never fade.",

"If I had one wish, I would simply thank you for every smile, every conversation and every beautiful chapter we shared.",

"This website is not meant to change the past...\n\nIt simply preserves one last bloom.\n\n❤️"

];

let pageIndex=0;

function typeWriter(text){

storyText.innerHTML="";

let i=0;

const timer=setInterval(()=>{

storyText.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

}

},35);

}

function startStory(){

pageIndex=0;

typeWriter(storyPages[0]);

}

nextStory.onclick=()=>{

clickFX();

page.classList.add("turn");

setTimeout(()=>{

page.classList.remove("turn");

pageIndex++;

if(pageIndex<storyPages.length){

typeWriter(storyPages[pageIndex]);

}else{

smoothScreen("gallery");

startGallery();

}

},1000);

};

/* =====================================================
   PETAL GENERATOR
===================================================== */

const petals =
document.getElementById("petals");

function createPetal(){

const p=document.createElement("div");

p.className="petal";

p.style.left=
Math.random()*100+"vw";

p.style.animationDuration=
(6+Math.random()*6)+"s";

p.style.opacity=
Math.random();

petals.appendChild(p);

setTimeout(()=>{

p.remove();

},12000);

}

/* Continuous Petals */

setInterval(createPetal,500);
/* =====================================================
   CINEMATIC GALLERY
===================================================== */

const photos = [
{
img:"assets/photo1.jpg",
title:"The Beginning",
text:"Every beautiful story starts with a beautiful moment."
},
{
img:"assets/photo2.jpg",
title:"Our Smile",
text:"Your smile is still my favorite memory."
},
{
img:"assets/photo3.jpg",
title:"Forever",
text:"Some memories never leave the heart."
},
{
img:"assets/photo4.jpg",
title:"Beautiful Days",
text:"The little moments meant everything."
},
{
img:"assets/photo5.jpg",
title:"The Last Bloom",
text:"No matter where life goes, you'll always bloom in my heart."
}
];

const galleryImage = document.getElementById("galleryImage");
const captionTitle = document.getElementById("captionTitle");
const captionText = document.getElementById("captionText");
const progress = document.getElementById("progress");

let currentPhoto = 0;

function fadeToGalleryMusic(){

const fade = setInterval(()=>{

if(bgMusic.volume > 0.05){

bgMusic.volume -= 0.05;

}else{

clearInterval(fade);

bgMusic.pause();

galleryMusic.volume = 0.6;

galleryMusic.play().catch(()=>{});

}

},180);

}

function restoreMusic(){

galleryMusic.pause();

bgMusic.currentTime = 0;

bgMusic.volume = 0.5;

bgMusic.play().catch(()=>{});

}

function showPhoto(){

galleryImage.style.opacity = 0;

setTimeout(()=>{

galleryImage.src = photos[currentPhoto].img;

captionTitle.innerHTML = photos[currentPhoto].title;

captionText.innerHTML = photos[currentPhoto].text;

galleryImage.style.opacity = 1;

galleryImage.style.animation = "none";

void galleryImage.offsetWidth;

galleryImage.style.animation = "kenburns 8s linear forwards";

},500);

progress.animate(

[
{width:"0%"},
{width:"100%"}
],

{
duration:8000,
fill:"forwards"
}

);

}

function startGallery(){

fadeToGalleryMusic();

currentPhoto = 0;

showPhoto();

const timer = setInterval(()=>{

currentPhoto++;

if(currentPhoto >= photos.length){

clearInterval(timer);

restoreMusic();

smoothScreen("memoryWall");

return;

}

showPhoto();

},8000);

}

/* =====================================================
   MEMORY WALL
===================================================== */

const notes = document.querySelectorAll(".memoryNote");

const popup = document.getElementById("memoryPopup");

const popupMessage =
document.getElementById("popupMessage");

const closeMemory =
document.getElementById("closeMemory");

notes.forEach(note=>{

note.onclick = ()=>{

clickFX();

popup.style.display = "flex";

popupMessage.innerHTML =
note.dataset.message;

/* Flower Burst */

for(let i=0;i<20;i++){

setTimeout(createPetal,i*30);

}

};

});

closeMemory.onclick = ()=>{

clickFX();

popup.style.display = "none";

};

document
.getElementById("toNightSky")
.onclick = ()=>{

clickFX();

smoothScreen("nightSky");

};
/* =====================================================
   NIGHT SKY
===================================================== */

const starsContainer = document.getElementById("stars");
const shootingContainer = document.getElementById("shootingStars");

const starMessages = [
"Every star reminds me of you. ✨",
"Some memories never fade.",
"You'll always have a place in my heart.",
"Thank you for every smile.",
"Our story will always bloom.",
"The sky still remembers us.",
"You were my favorite chapter. ❤️"
];

for(let i=0;i<300;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.onclick=()=>{

        clickFX();

        document.getElementById("messageBox").style.display="block";

        document.getElementById("starMessage").innerHTML=
        starMessages[Math.floor(Math.random()*starMessages.length)];

    };

    starsContainer.appendChild(star);

}

document.getElementById("closeStar").onclick=()=>{

    clickFX();

    document.getElementById("messageBox").style.display="none";

};

function createShootingStar(){

    const s=document.createElement("div");

    s.className="shooting";

    s.style.top=Math.random()*250+"px";

    shootingContainer.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },2500);

}

setInterval(createShootingStar,4500);

/* =====================================================
   FLOWER GARDEN
===================================================== */

const flowerField=document.getElementById("flowerField");

for(let i=0;i<40;i++){

    const flower=document.createElement("div");

    flower.className="flower";

    flower.innerHTML="🌸";

    flower.style.animationDelay=(i*0.12)+"s";

    flowerField.appendChild(flower);

}

document.getElementById("toGarden").onclick=()=>{

    clickFX();

    smoothScreen("garden");

};

document.getElementById("toFinal").onclick=()=>{

    clickFX();

    smoothScreen("final");

};

/* =====================================================
   FINAL SCREEN
===================================================== */

const heart=document.getElementById("heart");

setInterval(()=>{

    heart.animate(

    [
        {transform:"scale(1)"},
        {transform:"scale(1.2)"},
        {transform:"scale(1)"}
    ],

    {
        duration:1500
    });

},1800);

/* =====================================================
   RESTART
===================================================== */

document.getElementById("restart").onclick=()=>{

    clickFX();

    galleryMusic.pause();

    bgMusic.currentTime=0;

    bgMusic.volume=0.5;

    bgMusic.play().catch(()=>{});

    smoothScreen("welcome");

};

/* =====================================================
   SPARKLES
===================================================== */

const sparkleBox=document.getElementById("sparkles");

function createSparkle(){

    const s=document.createElement("div");

    s.className="sparkle";

    s.style.left=Math.random()*100+"vw";
    s.style.top=Math.random()*100+"vh";

    sparkleBox.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },2500);

}

setInterval(createSparkle,180);

/* =====================================================
   FIREFLIES
===================================================== */

const fireflies=document.getElementById("fireflies");

for(let i=0;i<20;i++){

    const f=document.createElement("div");

    f.className="firefly";

    f.style.left=Math.random()*100+"vw";
    f.style.top=Math.random()*100+"vh";

    fireflies.appendChild(f);

}
