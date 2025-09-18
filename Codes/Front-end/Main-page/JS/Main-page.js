// THIS IS Main-page.html's page Javscript file.

// Hamburger Section ---------------------------------
const sidebar_sec = document.getElementById('sidebar');
const close_Sidebar_btn = document.getElementById('closeSideBar')

function showSidebar() {
    sidebar_sec.style.display = 'block';
}

function closeSideBar() {
    sidebar_sec.style.display ='none';
}

// All categories Section ---------------------------------------- 

const categories_button = document.getElementById('categoryBtn');
const categories_section = document.getElementById('CategoriesDD');
const close_category = document.getElementById('closeCategory')
function openCategory() {
    categories_section.style.display ="block";
}

function closeCategory() {
    categories_section.style.display ="none";
}

// User section -----------------------------------------------------------
const user_image = document.getElementById('userImg');
const user_section = document.getElementById('userDD');
const close_userSection = document.getElementById('closeBtn')

function openUserSec() {
    user_section.style.display = 'block';
}

function closeUserSec(){
    user_section.style.display = 'none';
}

