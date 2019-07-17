const buttOpen = document.querySelector(".btn")
const buttClose = document.querySelector(".btn_close")
const sideMenu = document.querySelector('.navbar_side')

buttClose.addEventListener('click', () => {
    sideMenu.classList.toggle('addClass')
})

buttOpen.addEventListener('click', () => {
    sideMenu.classList.toggle('addClass')
})