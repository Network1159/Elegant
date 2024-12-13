const storeProducts = [
    {
        id: 1,
        imgPath:"./store-img/pic(2).svg",
        description: "Table lamp",
        prices: "$24.00"

    },
    {
        id: 2,
        imgPath:"./Elements/Paste image.svg",
        description: "Beige Table Lamp",
        prices: "$24.00"

    },
    {
        id: 3,
        imgPath:"./Element/Paste image.svg",
        description: "Bamboo basket",
        prices: "$24.00"

    },

]



let containerElem = document.getElementById("New");


//Mapping through an array
storeProducts.map((product) => {
    containerElem.innerHTML += `
    <div class="">
        <img src=${product.imgPath} alt="" class="card-img">
        <h4 class="card-decription">${product.description}</h4>
        <p class="card-price">${product.prices}</p>
    </div>
    `

})
const names = ["Melody", "Samuel", "Jack", "Martins", "David", "Daniel", "Elijah", "Terry", "Progress", "Great"];

const ulElem = document.getElementById("student-list");
names.map((items) => {
    ulElem.innerHTML += `
    <li> ${items} </li>
    `
});

let selectedNames = names.slice(1, 4);



const footballClub = ["manchesterCity", "Juventus","realMadrid" ];
