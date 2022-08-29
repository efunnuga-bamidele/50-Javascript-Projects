const leftbtn = document.querySelector('.left')
const rightbtn = document.querySelector('.right')
const container = document.querySelector('.container')


leftbtn.addEventListener('mouseenter', () => container.classList.add('hover-left'))
leftbtn.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

//toggling the hover-right class
rightbtn.addEventListener('mouseenter', () => container.classList.add('hover-right'))
rightbtn.addEventListener('mouseleave', () => container.classList.remove('hover-right'))