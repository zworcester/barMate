document.body.onload = addElement;

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
    const currentDiv = document.getElementById("head1");
    document.body.insertBefore(newDiv, currentDiv);
}

const cardID = alcoholList.foreach((item) => {
    item.id;

})


const headerName = document.getElementById('headerName');

console.log(headerName)