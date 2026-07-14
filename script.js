/* ==========================================
   TYPEWRITER EFFECT
========================================== */

const typingElement = document.getElementById("typing");

const text =
"Python Developer • Machine Learning Enthusiast • Automation Engineer • Gamer";

let index = 0;

function typeWriter() {

    if (index < text.length) {

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 60);

    }

}

window.addEventListener("load", typeWriter);


/* ==========================================
   STATUS CHANGER
========================================== */

const statusElement = document.getElementById("status");

const statusMessages = [

    "Preparing the next mission...",

    "Loading Python modules...",

    "Training Machine Learning models...",

    "Sharpening Selenium scripts...",

    "Exploring the Wild West...",

    "Building something legendary...",

    "Deploying projects...",

    "Almost Ready..."

];

let statusIndex = 0;

setInterval(() => {

    statusIndex++;

    if (statusIndex >= statusMessages.length) {

        statusIndex = 0;

    }

    statusElement.textContent = statusMessages[statusIndex];

}, 2500);


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(

".card, .project-card, .hero-content"

);

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

},

{

threshold:0.2

}

);

revealElements.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(60px)";

    el.style.transition="all .8s ease";

    observer.observe(el);

});


/* ==========================================
   NAVIGATION ACTIVE EFFECT
========================================== */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(item=>item.classList.remove("active"));

        link.classList.add("active");

    });

});


/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("mousemove",(e)=>{

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        button.style.setProperty("--x",x+"px");

        button.style.setProperty("--y",y+"px");

    });

});


/* ==========================================
   VIDEO FADE-IN
========================================== */

const video = document.getElementById("bg-video");

video.addEventListener("loadeddata",()=>{

    video.style.opacity="1";

});

video.style.opacity="0";

video.style.transition="opacity 2s ease";


/* ==========================================
   RANDOM PAGE TITLE
========================================== */

const titles=[

"🤠 MPTY | Welcome Cowboy",

"⚡ Python Developer",

"🎮 Gamer Portfolio",

"🐍 Machine Learning",

"🌄 The Frontier Awaits"

];

setInterval(()=>{

    document.title=titles[Math.floor(Math.random()*titles.length)];

},5000);


/* ==========================================
   PARALLAX EFFECT
========================================== */

window.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.pageX)/40;

    const y=(window.innerHeight/2-e.pageY)/40;

    document.querySelector(".overlay").style.transform=

    `translate(${x}px,${y}px)`;

});


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(

"%cHowdy, Partner! 🤠",

"color:#d8a74f;font-size:24px;font-weight:bold;"

);

console.log(

"%cThanks for visiting my portfolio.",

"color:white;font-size:16px;"

);

console.log(

"%cGitHub: https://github.com/OliverAiku0002",

"color:#58a6ff;font-size:16px;"

);


/* ==========================================
   CLOCK
========================================== */

function updateClock(){

    const now=new Date();

    const time=now.toLocaleTimeString();

    console.log("Current Time:",time);

}

setInterval(updateClock,60000);
