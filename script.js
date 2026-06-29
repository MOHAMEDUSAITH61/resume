// ==============================
// Typing Effect
// ==============================

const role = document.querySelector(".role");

const text = "Web Developer | Frontend Developer | QA Tester";

let index = 0;
let deleting = false;

function typeEffect() {

    if (!deleting) {

        role.textContent = text.substring(0, index);

        index++;

        if (index > text.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        role.textContent = text.substring(0, index);

        index--;

        if (index < 0) {

            deleting = false;

            index = 0;
        }

    }

    setTimeout(typeEffect, deleting ? 40 : 90);
}

typeEffect();


// ==============================
// Fade In Animation on Scroll
// ==============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.2
}

);

sections.forEach(section=>{

observer.observe(section);

});


// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.classList.add("visible");

}

else{

topBtn.classList.remove("visible");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


// ==============================
// Current Year
// ==============================

const footer=document.createElement("footer");

footer.innerHTML=`© ${new Date().getFullYear()} Mohammed Usaith SA`;

document.body.appendChild(footer);


// ==============================
// Card Hover Animation
// ==============================

const cards=document.querySelectorAll(".project");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});


// ==============================
// Console Message
// ==============================

console.log("Portfolio Loaded Successfully!");