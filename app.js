const hamburgerManu = document.querySelector(".mobile-manu");
const closeManu = document.querySelector(".mobileManuClose");
const mobileNavLinks = document.querySelector('.mobileNavLinks')
const overlay = document.querySelector('.overlay')

hamburgerManu.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('openDrawer');
    overlay.style.display = "block";

})
closeManu.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('openDrawer');
    overlay.style.display = "none";


})
