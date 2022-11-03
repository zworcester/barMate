// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

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

var oldImg = document.getElementsByClassName("oldImg");


var loadFile = function(event) {
    var image = document.getElementById('oldImg');
    image.src = URL.createObjectURL(event.target.files[0]);
};

// var ABVContent = document.getElementById('ABV').on('keyup', function() {
//     var value = this.value;
//     var element = document.getElementById('myBar');
//     element.innerHTML = '<div id="#myBar" style="width: ' + value +
//         '%"></div>';
// })

// var ab = document.getElementById('ABV');

// ab.on('keyup', function() {
//     var width = ab.value;

//     ele.style.width = width + '%';

// });

//****************Function to increase ABV Content Bar *****************
window.onkeyup = keyup;

function keyup(e) {
    var inputValue = document.querySelector('#ABV').value;

    console.log('this is my value: ' + inputValue);
    var ABVCont = document.querySelector('#myBar');

    if (inputValue === '') {
        ABVCont.style.width = 0 + "%";
    } else {
        ABVCont.style.width = inputValue + "%";

    }


}

//****************Function to Remove Overlay *****************


// function RemoveOverlay(e) {
//     document.getElementById("Overlay").outerHTML = '';
// }

function RemoveOverlay(e) {
    var overlay = document.getElementById("OverlayID");
    overlay.classList.toggle('Overlay');
}