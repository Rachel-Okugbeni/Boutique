const productName = document.getElementsByClassName('product-name')[0].innerHTML;
const productPrice = document.getElementsByClassName('price')[0].innerHTML;
let productQuantity = document.getElementById('quantity').defaultValue = 1;
let updatedQuantity = 1;
let basket = [];

let item = {
    name: productName,
    price: productPrice,
    quantity: productQuantity
}

console.log(item.quantity)
function updateValue() {
  updatedQuantity = +document.getElementById('quantity').value
}
    
function addBasket() {
     if (basket.length === 0) {
        basket.push(item);
        item.quantity = updatedQuantity
     } else {
        let i;
        for (i=0; i < basket.length; i++) {
            if (basket[i].name === item.name) {
                item.quantity = item.quantity + updatedQuantity
            } else {
                basket.push(item);
            }
        }
    }
}


console.log(basket);
