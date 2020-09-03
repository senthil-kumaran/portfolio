// var navBar = document.querySelector('.navigation')
// var sticky = navBar.offsetTop;

// window.onscroll = function() {
//     if(window.pageYOffset >= sticky)
//         navBar.classList.add('sticky')
//     else
//         navBar.classList.remove('sticky')    
// }


window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}