const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')
const botaoUser = document.querySelector('.cabecalho__perfil')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')

})

botaoUser.addEventListener('click',() => {
    menu.classList.toggle('cabecalho__perfil_menu-ativo')
})