const sortFilterBtn = document.querySelector('.sort-filter-btn');
const sortFilterContainer = document.querySelector("#sort-filter-container");
const overlayBg = document.querySelector("#overlay-bg");
const closeBtn = document.querySelector('.closebtn');

function openSidebar() {
    sortFilterContainer.classList.add('open-sidebar');
}
  
function closeSidebar() {
    sortFilterContainer.classList.remove('open-sidebar');
}

sortFilterBtn.addEventListener('click', openSidebar)
closeBtn.addEventListener('click', closeSidebar)
overlayBg.addEventListener('click', closeSidebar)