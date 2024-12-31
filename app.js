const hamburgerManu = document.querySelector(".mobile-manu");
const closeManu = document.querySelector(".mobileManuClose");
const mobileNavLinks = document.querySelector('.mobileNavLinks')
const overlay = document.querySelector('.overlay')

const mobileLinks = document.querySelector('.mobileLinks');
const linkedList = document.querySelector('.linkedList');

hamburgerManu.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('openDrawer');
    overlay.style.display = "block";

})
closeManu.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('openDrawer');
    overlay.style.display = "none";


})

mobileLinks.addEventListener('click', (e) => {
    // if(e.target.classList.contains("dropdown")){
    //     linkedList.classList.toggle('dropdownLink');
        
    // }

    if (e.target.classList.contains('dropdown')) {
        // Find the closest linked-list to the clicked button
        const linkedList = e.target.nextElementSibling;

        //Check if the next elementSibling exist and has a classname of linkedList
        if (linkedList && linkedList.classList.contains('linkedList')) {
            linkedList.classList.toggle('dropdownLink');
        }
    }
})
