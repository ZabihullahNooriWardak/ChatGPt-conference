// code for hiding popUp in about page

const burgerMenu = document.getElementById('bx');
burgerMenu.addEventListener('click', () => {
  document.querySelector('.burger-menue').style.display = 'inline';
});

document.getElementById('zabih').addEventListener('click', () => {
  document.querySelector('.burger-menue').style.display = 'none';
});