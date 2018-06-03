
window.addEventListener('scroll',function () {
    if(window.scrollY > 0){
        header.classList.add('sticky');
    }
    else {
        header.classList.remove('sticky');
    }
});