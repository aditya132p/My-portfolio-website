//  main text typed animation
var typed = new Typed(".multiple-text", {
  strings: ["", "Frontend Developer", "Backend Developer.", "Blogger"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
//  menu toggle

document.getElementById("ham").onclick = function () {
 
  navBar = document.querySelector(".nav-items");
  navBar.classList.toggle("active");

  icon = document.querySelector("#ham");
  icon.classList.toggle("bx-x");
  icon.classList.remove("bx-menu");
  icon.classList.toggle("bx-menu");
};

document.querySelector(".nav-items").onclick = function () {
  navBar = document.querySelector(".nav-items");
  navR = document.querySelector("#ham");
  navBar.classList.remove("active");
  navR.classList.remove("bx-x");

  //    x.classList.remove("bx-x");
};


//  home section resume button
 function gotoLink(link){
     console.log(link.value);
     window.open(link.value);
 }

// scroll effect animations
window.addEventListener("scroll", Reveal);

function Reveal(){
  var RevealAnimation = document.querySelectorAll(".Reveal");

  for (var i=0; i < RevealAnimation.length; i++) {
    var windoHeight = window.innerHeight;
    var revealTop = RevealAnimation[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windoHeight - revealPoint) {
      RevealAnimation[i].classList.add("animation-top");
    }
    else{
      RevealAnimation[i].classList.remove("animation-top");
    }
    
  }
}

// scroll active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
 
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active-link');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active-link');
            });
        };
    });
};
