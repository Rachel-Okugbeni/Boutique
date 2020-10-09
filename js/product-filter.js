const necklaces = document.getElementsByClassName('necklace');
const bracelets = document.getElementsByClassName('bracelet');
const earrings = document.getElementsByClassName('earring');
const all = document.getElementsByClassName('jewellery');


function showAll() {
    let i;
    for (i=0; i < all.length; i++) {
        all[i].style.display = "block";
    }
}

function hideAll() {
    let i;
    for (i=0; i < all.length; i++) {
        all[i].style.display = "none";
    }
}

function filterProduct(category) {
    hideAll();
    let i;
    for (i=0; i < category.length; i++) {
        category[i].style.display = "block";
    };
}