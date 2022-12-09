function display_random_image() 
{
     let theImages = [{
        src: "images/Screenshot_20221123-011715_Instagram.jpg",
        width: "1080",
        height: "2408"
        
        
    }, {
        src: "images/Screenshot_20221123-011818_Instagram.jpg",
        width: "1080",
        height: "2408"
        
    }, {
        src: "images/Screenshot_20221123-011900_Instagram.jpg",
        width: "1080",
        height: "2408"
        
    }];
    
    let index = getRandomInt(0,theImages.length);
    const body = document.getElementById("body");
    const image = document.createElement("img");
    image.src = theImages[index].src;
    body.appendChild(image);
}


   
 //create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return imn;
    }  
/*
// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
*/