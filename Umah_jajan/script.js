const menu = document.getElementById('menu');
const close = document.getElementById('close');
const mobileMenu = document.getElementById('mobileMenu')

menu.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('hidden')
})
close.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('hidden')
})