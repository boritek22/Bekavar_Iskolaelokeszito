window.onscroll = function() {myFunction()};

var x = document.getElementById("mainmenu");
var sticky = x.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    x.classList.add("sticky")
  } else {
    x.classList.remove("sticky");
  }
}