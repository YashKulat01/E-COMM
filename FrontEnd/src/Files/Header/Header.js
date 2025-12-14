// THIS IS Header.jsx's page Javscript file.

// sidebar.js
export function openSidebar(setShowSidebar) {
    setShowSidebar(true);
}

export function closeSidebar(setShowSidebar) {
    setShowSidebar(false);
}

//  All categories Section ---------------------------------------- 

export function openCategory(setCategory) {
    setCategory(true)
}

export function closeCategory(setCategory) {
    setCategory(false)
}

//  User section -----------------------------------------------------------

export function openUserSec(setUserSec) {
    setUserSec(true)
}

export function closeUserSec(setUserSec ) {
    setUserSec(false)
}

// // Automatic Slider section----------------------------------------------

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let slides = document.getElementsByClassName("slide");
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";

//     setTimeout(showSlides, 3000); // Change every 3 seconds
// }

