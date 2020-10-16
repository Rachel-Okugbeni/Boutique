
//UPDATE BASKET COUNT
basketCount();
function basketCount() {
    let basket = localStorage.getItem("savedBasket") ? JSON.parse(localStorage.getItem("savedBasket")) : [];
    document.getElementById('cartVal').innerHTML =  basket.reduce((val, {quantity}) => val + quantity, 0);
}