const toTop = document.querySelector('.to-top');
const showMenu= document.querySelector('.attach-menu');

toTop.addEventListener('click', function() {
    window.scrollTo({
        top:0,
        left:0,
        behavior: 'smooth'

    });
});

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 100){
        toTop.classList.add('active');
        showMenu.classList.add('show');

    }
    else{
        toTop.classList.remove('active');
        showMenu.classList.remove('show');
    }
})