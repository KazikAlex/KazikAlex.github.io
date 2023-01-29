let menu = document.getElementById('header_menu'),
    hamburger_menu = document.getElementById('hamburger_menu')
    body = document.getElementById('body')
    

hamburger_menu.addEventListener('click', () => {
    menu.classList.contains('hide') ? 
    menu.classList.remove('hide') :
    menu.classList.add('hide')
})
