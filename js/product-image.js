let imageIndex = 1;
showImage(imageIndex);

// Next/previous controls
function changeImage(n) {
  showImage(imageIndex += n);
}

function showImage(n) {
  let i;
  const images = document.getElementsByClassName("product-image");

  if (n > images.length) {
      imageIndex = 1
    }
  if (n < 1) {
      imageIndex = images.length
    }
  for (i = 0; i < images.length; i++) {
      images[i].style.display = "none";
  }
    if (imageIndex > images.length) {imageIndex = 1}
    images[imageIndex-1].style.display = "block";
}
