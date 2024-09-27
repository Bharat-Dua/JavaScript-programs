//*-------- get the dimensions of image

//? To get the dimensions (width and height) of the image in javascript,you can create an image object,load the image,and then access the width and height property.

function getDimensions(imageUrl) {
  let img = new Image();

  img.src = imageUrl;

  img.onload = function () {
    let width = img.width;
    let height = img.height;
    console.log(`width`, width);
    console.log(`height`, height);
  };

  img.onerror = function () {
    console.log("Error loading image");
  };
}

//?-------- get the dimensions of image
let imageUrl = "./now.png";
getDimensions(imageUrl);
