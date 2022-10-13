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
    },
]



document.getElementById("searchBar").onlcik = function() {
    addItem();
};



document.getElementById("myBtn").onclick = function() { myFunction() };

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    alert(addAlcoholItem);
}
const tableListName = document.querySelector('#tableListName');
const addAlcoholItem = document.querySelector('#addAlcoholItem');

addAlcoholItem.addEventListener('click', () => {
    const tr = tableListName.querySelector('tr');
    const td = document.createElementby('td');
    tr.appendChild(td);
});