// code for hiding popUp in about page

const burgerMenu = document.getElementById('bx');
burgerMenu.addEventListener('click', () => {
  document.querySelector('.burger-menue').style.display = 'inline';
  document.querySelector('.images-container').style.display='none';
});

document.getElementById('zabih').addEventListener('click', () => {
  document.querySelector('.burger-menue').style.display = 'none';
  document.querySelector('.images-container').style.display='inline';
});