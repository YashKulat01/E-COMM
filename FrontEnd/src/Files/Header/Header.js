// THIS IS Main-page.html's page Javscript file.

// Hamburger Section ---------------------------------
const sidebar_sec = document.getElementById('sidebar');
const close_Sidebar_btn = document.getElementById('closeSideBar')

export function showSidebar() {
    sidebar_sec.style.display = 'block';
}

export function closeSideBar() {
    sidebar_sec.style.display = 'none';
}

// All categories Section ---------------------------------------- 

const categories_button = document.getElementById('categoryBtn');
const categories_section = document.getElementById('CategoriesDD');
const close_category = document.getElementById('closeCategory')
function openCategory() {
    categories_section.style.display = "block";
}

function closeCategory() {
    categories_section.style.display = "none";
}

// User section -----------------------------------------------------------
const user_image = document.getElementById('userImg');
const user_section = document.getElementById('userDD');
const close_userSection = document.getElementById('closeBtn')

function openUserSec() {
    user_section.style.display = 'block';
}

function closeUserSec() {
    user_section.style.display = 'none';
}

// Automatic Slider section----------------------------------------------

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 3000); // Change every 3 seconds
}

