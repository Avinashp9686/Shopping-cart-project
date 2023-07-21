let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Sports Red Jacket ',
        image: 'OIP (10).jpeg',
        price: '999'
    },
    {
        id: 2,
        name: 'Grey Mens T-Shirt',
        image: 'download.jpeg',
        price: '399'
    },
    {
        id: 3,
        name: 'Neostreak Mens Slim Fit Stretchable Jeans',
        image: 'OIP (1).jpeg',
        price: '1500'
    },
    {
        id: 4,
        name: 'Grey Mens T-Shirt',
        image: 'OIP (2).jpeg',
        price: '799'
    },
    {
        id: 5,
        name: 'Purple Sweat Shirt For Mens',
        image: 'OIP (3).jpeg',
        price: '2500'
    },
    
    {
        id: 6,
        name: 'Plane Grey Hoodies',
        image: 'OIP (4).jpeg',
        price: '1999'
    },
    {
        id: 7,
        name: 'White Hoodies',
        image: 'OIP (5).jpeg',
        price: '1200'
    },
    {
        id: 8,
        name: 'Denim Jacket',
        image: 'OIP (6).jpeg',
        price: '3000'
    },
    {
        id: 9,
        name: 'Mens Linen Long Sleeve Shirt(White)',
        image: 'OIP (8).jpeg',
        price: '500'
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="../Images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="../Images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}