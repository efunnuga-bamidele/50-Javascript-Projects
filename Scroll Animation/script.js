const pictures = document.querySelectorAll('.box')

window.addEventListener('scroll', checkboxes);

checkboxes();

function checkboxes(){
    const triggerBottom = window.innerHeight / 5 * 4

    pictures.forEach(pics => {
        const picsTop = pics.getBoundingClientRect().top

        if(picsTop < triggerBottom){
            pics.classList.add('show');
        }else{
            pics.classList.remove('show');
        }
    });
};