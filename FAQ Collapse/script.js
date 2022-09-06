const buttonToggles = document.querySelectorAll('.faq-toggle');
const faqDiv = document.querySelector('.faq');

buttonToggles.forEach(buttonToggles => {
    buttonToggles.addEventListener('click', () => {
        buttonToggles.parentNode.classList.toggle('active');
    })
})
