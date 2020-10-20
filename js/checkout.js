if (localStorage.length === 0) {
  emptyBasket()
}

let basketItems = JSON.parse(localStorage.getItem("savedBasket"));
let updateBasket = document.getElementById("update-btn")
let orderTotal = basketItems.reduce((val, {totalPrice}) => val + totalPrice, 0);

// DISPLAY ORDER TOTAL
document.getElementById('orderTotal').innerHTML = `£${orderTotal.toFixed(2)}`

// DISPLAY EMPTY BASKET MESSAGE IF BASKET ARRAY IS EMPTY
function emptyBasket() {
  document.getElementById("basket").style.display = "none"
  document.getElementById("emptyBasket").style.display = "block"
}

if (basketItems.length === 0) { 
  emptyBasket()
}

// DISPLAY BASKET ITEMS
function createTable() {
  let popBasket = document.getElementById("basketItems")
  let i;
  for (i=0; i < basketItems.length; i++) {
    // CREATE NEW ROW
      let row = document.createElement("tr");
    // CREATE IMAGE CELL
    let imgCell = document.createElement("td");
    let imgElement = document.createElement("img");
    imgElement.setAttribute("class", "basketImg");
    imgElement.setAttribute("src", basketItems[i].img);
    imgCell.appendChild(imgElement);
    // CREATE NAME CELL
      let nameCell = document.createElement("td");
      nameCell.innerHTML = basketItems[i].name
    // CREATE PRICE CELL
      let priceCell = document.createElement("td");
      priceCell.innerHTML = basketItems[i].price
    // CREATE QUANTITY CELL
      let quantCell = document.createElement("td");
      let quantInput = document.createElement("input");
      quantInput.setAttribute("type", "number");
      quantInput.setAttribute("class", "quantity");
      quantInput.setAttribute("value",`${basketItems[i].quantity}`);
      quantInput.setAttribute("min", 1);
      quantInput.setAttribute("max", 10);
      quantCell.appendChild(quantInput);
          // UPDATE QUANTITY & PRICE IN ARRAY
      quantInput.addEventListener("change", function(){
        let itemName = nameCell.innerHTML;
        let itemIndex = basketItems.findIndex(item => item.name === itemName);
          let price = Number(basketItems[itemIndex].price.replace(/[^0-9.-]+/g,""));
        basketItems[itemIndex].quantity = +quantInput.value
        basketItems[itemIndex].totalPrice = +quantInput.value * price
       })
      
    // CREATE PRICE PER PRODUCT CELL
      let totPriceCel = document.createElement("td");
      totPriceCel.innerHTML = `£${basketItems[i].totalPrice.toFixed(2)}`;
    // CREATE REMOVE BUTTON CELL
      let buttonCell = document.createElement("td");
      let removeBtn = document.createElement("button");
      removeBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;
      removeBtn.addEventListener("click", function(){
        row.remove();
        let itemName = nameCell.innerHTML
        let itemIndex = basketItems.findIndex(item => item.name === itemName)
        basketItems.splice(itemIndex,1)
      });
      buttonCell.appendChild(removeBtn)
      // ADD CELLS TO ROW
      row.appendChild(imgCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(quantCell);
      row.appendChild(totPriceCel);
      row.appendChild(buttonCell);
      // ADD ROW TO TABLE
      popBasket.appendChild(row)
  }
}
createTable();

// SAVE CHANGES TO LOCAL STORAGE
updateBasket.addEventListener("click", function(){
  if (basketItems.length > 0) {
  localStorage.setItem("savedBasket", JSON.stringify(basketItems));
  } else {
    localStorage.setItem("savedBasket", JSON.stringify(basketItems));
  }
  window.location.reload();
});

//DISPLAY CHECKOUT MESSAGE
function checkout() {
  document.getElementById("basket").style.display = "none"
  document.getElementById("checkout").style.display = "block"
  basketItems = [];
  localStorage.setItem("savedBasket", JSON.stringify(basketItems));
  setTimeout(function() {
    window.location.reload();
  }, 1000);

}




