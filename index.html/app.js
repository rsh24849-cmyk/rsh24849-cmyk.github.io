*When the user clicks on the accordion buttons*/

var i;

for (i = 0; i < (document.getElementsByClassName("accordion")).length; i++) {
  (document.getElementsByClassName("accordion"))[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display=== "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    } 
  });
}

/*nav tab*/

function toggleMenu() {
  var x = document.getElementById("mobileMenu");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

// Dynamically load Font Awesome kit (valid JavaScript instead of raw HTML attributes)
(function() {
  var fa = document.createElement('script');
  fa.src = "https://kit.fontawesome.com/a076d05399.js";
  fa.crossOrigin = "anonymous";
  fa.defer = true;
  document.head.appendChild(fa);
})();
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    })

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    }))

