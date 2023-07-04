//js for burger Menu

const burgerMenuX = document.querySelector("header .bx");
burgerMenuX.addEventListener("click", function () {
  document.querySelector(".burger-menue").style.display = "inline";
  //for hiding the speakers images while burgerMenu is opened
  let arrImages = document.getElementsByClassName('images');
  for(let i=0;i<arrImages.length;i++){
arrImages[i].style.display='none';
  }
});

const burgerMenu = document.querySelector(".burger-menue .bx");
burgerMenu.addEventListener("click", function () {
  document.querySelector(".burger-menue").style.display = "none";
});

let menuArray = document.getElementsByClassName("menue");
for (let i = 0; i < menuArray.length; i++) {
  menuArray[i].addEventListener("click", function () {
    document.querySelector(".burger-menue").style.display = "none";
  });
}
