
//**************** Function for scrolling  *****************
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


//**************** Function for side menu to appear after scrolling 100px *****************

const showMenu = () => document.querySelector(".stickyRight-o").classList.add("visible");
const hideMenu = () => document.querySelector(".stickyRight-o").classList.remove("visible");
document.addEventListener("scroll", (e) => window.scrollY < 100 ? hideMenu() : showMenu());


/*document.body.onload = addElement;

var alcoholList = [{
        id: 0,
        ABV: 37.50,
        Name: 'Gin'
    },
    {
        id: 1,
        ABV: 35.0,
        Name: 'Vodka'
    },
    {
        id: 2,
        ABV: 37.50,
        Name: 'Rum'
    }
]

const addInput = document.querySelector('.form-control');
const addItemToList = document.querySelector('#tableListName');
const tableData = document.querySelector('#tableListName');

addItemToList.addEventListener('keypress', function(e) {
    if (e.key == 'Enter') {
        const tr = addItemToList.querySelector('tr');
        const td = document.createElement('td')
        tr.appendChild(td);
    }
})

function addElement() {
    // create a new div element
    const newDiv = document.createElement("h2");

    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    // const currentDiv = document.getElementById("head1");
    document.body.insertBefore(newDiv, currentDiv);
}

const cardID = alcoholList.foreach((item) => {
    item.id;

})


// const headerName = document.getElementById('headerName');

console.log(headerName) */


