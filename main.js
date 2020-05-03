const divSlide = () => {
    const icon = document.querySelector('.icon');
    const div = document.querySelector('.link');
    icon.addEventListener('click',()=>{
        div.classList.toggle('nav-active');
    })
}
divSlide();