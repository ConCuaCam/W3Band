const buyBtns = document.querySelectorAll('.place-buy-btn')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal-close')
const modalContainer = document.querySelector('.modal-container')

function showBuyTickets() {
    modal.classList.add('open')
}

function hideBuyTickets() {
    modal.classList.remove('open')
}

//Lap qua tung the button va nghe hanh vi click
for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})

var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');

mobileMenu.onclick = function() {
    console.log(header.clientHeight)
}

//Tu dong dong khi chon menu 
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');
console.log(menuItems)
