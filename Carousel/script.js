let carousel = document.querySelector("[data-carousel]")
let buttons = carousel.querySelectorAll('button')

buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        console.log(button.dataset.carouselBtn)
        let offset = button.dataset.carouselBtn==="prev"?-1:1;

        let slides = button.closest('[data-carousel]')
        .querySelector("[data-slides]")
        console.log(slides)
        let activeSlide = slides.querySelector("[data-active]")
        
        let newIndex = [...slides.children].indexOf(activeSlide)+offset;
        console.log(newIndex)

        if(newIndex<0){
            newIndex = slides.children.length-1
        }
        if(newIndex===slides.children.length){
            newIndex = 0
        }
        slides.children[newIndex].dataset.active=true;
        delete activeSlide.dataset.active

    })
})