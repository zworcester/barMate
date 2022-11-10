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
    reset_animation();
    test();

}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function test() {
    console.log('delaying color');

    document.getElementById('lala').style.animation = "waves 5s linear forwards";

    await delay(1000);

    console.log('color changed');

    toggleBtn();
}

var btnEdit = false;

function toggleBtn() {
    btnEdit ? revertBtn() : cancelBtn();
}

function cancelBtn() {

    document.getElementById("btnColor").style.background = "#c3981e";
    document.getElementById("btnColor").style.color = "black";
    document.getElementById("btnColor").style.fontWeight = "600";
    document.getElementById("btnColor").innerHTML = "Quit";
    document.getElementById("shape2").style.background = "linear-gradient(-315deg, #252523, #252425)";
    document.getElementById("shape1").style.background = "linear-gradient(-315deg, rgb(37 37 35 / 50%), rgb(37 36 37 / 50%))";
    // document.get("container").style.background = "linear-gradient(315deg, #c3981e 10%, black 10%, black 20%, #c3981e 20%,#c3981e 30%, black 30%, black 40%, #c3981e 40%,#c3981e 50%, black 50%, black 60%, #c3981e 60%,#c3981e 70%, black 70%, black 80%, #c3981e 80%, #c3981e 90%, black 90%)";
    // document.getElementsByTagName('body')[0].style.background =
    // "linear-gradient(315deg, #c3981e 10%, black 10%, black 20%, #c3981e
    // 20%,#c3981e 30%, black 30%, black 40%, #c3981e 40%,#c3981e 50%, black
    // 50%, black 60%, #c3981e 60%,#c3981e 70%, black 70%, black 80%, #c3981e
    // 80%, #c3981e 90%, black 90%)";
    document.getElementById("cautiontop").style.visibility = 'visible';
    document.getElementById("cautionbot").style.visibility = 'visible';
    // document.getElementById("cautiontop").style.opacity = '0';
    // document.getElementById("cautionbot").style.opacity = '0';
    // document.getElementById("fa-square-pen").style.visibility = 'visible';
    // document.getElementsByClassName("fa-square-pen")[0].style.visibility = 'visible';
    [].forEach.call(document.querySelectorAll('.fa-square-pen'), function(el) {
        el.style.visibility = 'visible';
    });

    document.getElementById('cautionbot').style.animation = "caution 5s infinite linear";
    document.getElementById('cautiontop').style.animation = "caution 5s infinite linear";
    btnEdit = true;
}

function revertBtn() {
    document.getElementById("btnColor").style.background = "linear-gradient(-315deg, #252523, #252425)";
    document.getElementById("btnColor").style.color = "#fff";
    document.getElementById("btnColor").style.fontWeight = "600";
    document.getElementById("btnColor").innerHTML = "Edit";
    document.getElementById("shape2").style.background = "#c3981e";
    document.getElementById("shape1").style.background = "#c3981e80";
    document.getElementById("cautiontop").style.visibility = 'hidden';
    document.getElementById("cautionbot").style.visibility = 'hidden';
    [].forEach.call(document.querySelectorAll('.fa-square-pen'), function(el) {
        el.style.visibility = 'hidden';
    });

    btnEdit = false;
}

function reset_animation() {
    var el = document.getElementById('lala');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null;
}

const showMenu = () => document.querySelector(".stickyRight-o").classList.add("visible");
const hideMenu = () => document.querySelector(".stickyRight-o").classList.remove("visible");
document.addEventListener("scroll", (e) => window.scrollY < 100 ? hideMenu() : showMenu());