const hamburgerManu = document.querySelector(".mobile-manu");
const closeManu = document.querySelector(".mobileManuClose");
const mobileNavLinks = document.querySelector('.mobileNavLinks')
const overlay = document.querySelector('.overlay')

const mobileLinks = document.querySelector('.mobileLinks');
const linkedList = document.querySelector('.linkedList');

// const arrowUp = document.querySelector('.arrow-up');
// const arrowDown = document.querySelector('.arrow-down');


// 

hamburgerManu.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('openDrawer');
    overlay.style.display = "block";

})
closeManu.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('openDrawer');
    overlay.style.display = "none";


})


//Creation of event listener for dropdown manu of mobile navigation slider
mobileLinks.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('dropdown')) {
        // Find the closest linked-list to the clicked button
        const linkedList = e.target.nextElementSibling;
       

        //Check if the next elementSibling exist and has a classname of linkedList
        if (linkedList && linkedList.classList.contains('linkedList')) {
            linkedList.classList.toggle('dropdownLink');
            

            // Find the arrow within the clicked dropdown
            const arrowDown = e.target.querySelector('.arrow-down');
            if (arrowDown) {
                arrowDown.classList.toggle('arrow-rotate');
            }
        
        }

    }
})
