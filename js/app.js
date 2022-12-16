let arr = ["0", "1", "2", "3", "4"]; 
let count = -1; 
let timer; 
 
const buttonForward = document.querySelector(".forward"); 
buttonForward.addEventListener("click", changePhotoForward); 
 
const buttonBack = document.querySelector(".back"); 
buttonBack.addEventListener("click", changePhotoBack); 
 
function setImage(indexImage) { 
  const img = document.querySelector(".photo"); 
  img.src = "./img/" + arr[indexImage] + ".jpg"; 
} 
 
function showSlides() { 
  console.log(count); 
  
  count ++ ; 

  if (count === arr.length) { 
    count = 0; 
  }

  setImage(count); 
 
  timer = setTimeout(showSlides, 3000); 
} 
 
function changePhotoForward() { 
  clearTimeout(timer); 
    count ++; 

    if (count === arr.length) { 
        count = 0; 
      } 

  setImage(count); 
 
  timer = setTimeout(showSlides, 3000); 
} 
 
function changePhotoBack() { 
  clearTimeout(timer);
  count --; 

  if (count === -1) { 
    count = arr.length - 1; 
  } 

  setImage(count); 
  timer = setTimeout(showSlides, 3000); 
} 
 
showSlides();