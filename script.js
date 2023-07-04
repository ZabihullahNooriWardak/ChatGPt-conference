//js for burger Menu 

const burgerMenuX = document.querySelector('header .bx');
burgerMenuX.addEventListener('click',function(){

    document.querySelector('.burger-menue').style.display='inline';
});

const burgerMenu = document.querySelector('.burger-menue .bx');
burgerMenu.addEventListener('click',function(){
    document.querySelector('.burger-menue').style.display='none';
})

