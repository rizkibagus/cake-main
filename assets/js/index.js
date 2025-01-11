window.addEventListener("DOMContentLoaded", function () {
    AOS.init();

    const navbar = document.querySelector("header nav");
    const navBurger = document.querySelector(".nav-burger i.fas.fa-bars");
    const navList = document.querySelector(".nav-list");
   

    navBurger.addEventListener("click", function () {
        navList.classList.toggle("slide");
    });

    window.addEventListener("click", function (e) {
        if (e.target !== navBurger && e.target !== navList) {
            navList.classList.remove("slide");
        }
    });
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


