if (localStorage.length === 0) {
  emptyBasket()
}

let basketItems = JSON.parse(localStorage.getItem("savedBasket"));
let updateBasket = document.getElementById("update-btn");
let orderSubTotal = basketItems.reduce((val, {totalPrice}) => val + totalPrice, 0);
let shipping = 2.5;
let orderTotal = orderSubTotal + shipping;
let couponInput = document.getElementById('couponCode');
let appliedCode = localStorage.getItem("appliedCode") ? JSON.parse(localStorage.getItem("appliedCode")) : "";
let couponCode = appliedCode.code;
let discount = orderSubTotal * appliedCode.discount;
let validCoupons = [
  {
    code: 'SAVE10',
    discount: 0.1,
  },
  {
    code: 'SAVE15',
    discount: 0.15,
  }
];

// ON WINDOW LOAD - CHECKS IF ANY CODES HAVE ALREADY BEEN APPLIED AT CHECKOUT 
checkAppliedCodes();

// DISPLAY ORDER SUBTOTAL
document.getElementById('orderSubTotal').innerHTML = `£${orderSubTotal.toFixed(2)}`
// DISPLAY SHIPPING
document.getElementById('shipping').innerHTML = `£${shipping.toFixed(2)}`
// DISPLAY ORDER TOTAL
document.getElementById('orderTotal').innerHTML = `£${orderTotal.toFixed(2)}`


// IF BASKET ARRAY IS EMPTY RUN SHOW EMPTY BASKET MESSAGE
if (basketItems.length === 0) { 
  emptyBasket()
}

// DISPLAY EMPTY BASKET MESSAGE
function emptyBasket() {
  document.getElementById("basket").style.display = "none"
  document.getElementById("emptyBasket").style.display = "block"
}

// DISPLAY BASKET ITEMS FROM ARRAY
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
};
createTable();

// SAVE QUANTITY CHANGES TO LOCAL STORAGE
updateBasket.addEventListener("click", function(){
  localStorage.setItem("savedBasket", JSON.stringify(basketItems));
   window.location.reload();
});

//DISPLAY CHECKOUT MESSAGE
function checkout() {
  document.getElementById("basket").style.display = "none"
  document.getElementById("checkout").style.display = "block"
  basketItems = [];
  discount = 0;
  localStorage.setItem("savedBasket", JSON.stringify(basketItems));
  localStorage.setItem("appliedCode", "");
  setTimeout(function() {
    window.location.reload();
  }, 1000);
};

//UPDATES COUPON CODE VALUE ON INPUT CHANGE
couponInput.addEventListener("change", function(code) {
  couponCode = couponInput.value
 });

// FINDS COUPON CODE IN ARRAY AND APPLIES DISCOUNT
function coupon() {
  let msg = document.getElementById('coupon-msg');
  //FIND INDEX OF COUPON CODE
  let codeIndex = validCoupons.findIndex(code => code.code === couponCode);
  if (appliedCode === "" || appliedCode.code != couponCode) {
    if (codeIndex >= 0) { // CHECKS IF COUPON CODE IS VALID
      localStorage.setItem("appliedCode", JSON.stringify(validCoupons[codeIndex]));
      discount = orderSubTotal * validCoupons[codeIndex].discount
      orderTotal = orderTotal - discount 
      msg.innerHTML = 'Coupon applied successfully!';
      updateTotals();
      window.location.reload();
      } else {
        msg.style.color = 'red';
        msg.innerHTML = 'Invalid code, please try again.';
        };
  } else {
    msg.style.color = 'red';
    msg.innerHTML = 'Code already applied'
  }
}

function checkAppliedCodes() {
  if (appliedCode != "") {
    orderTotal = orderTotal - discount;
      updateTotals();
      document.getElementById('showCode').style.display = "block";
      document.getElementById('appliedCode').innerHTML = `${appliedCode.code}`;

  }
}

// REMOVES CODE AND UPDATES VALUES
function removeCode() {
  document.getElementById('showCode').style.display = "none";
  localStorage.setItem("appliedCode","");
  window.location.reload();
}

//UPDATES ORDER VALUES & DISCOUNT ON DOM
function updateTotals() {
  document.getElementById('orderTotal').innerHTML = `£${orderTotal.toFixed(2)}` //UPDATE ORDER TOTAL VALUE
  document.getElementById('discount').innerHTML = `£${discount.toFixed(2)}` //UPDATE DISCOUNT VALUE
}


