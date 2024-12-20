let slides = document.getElementsByClassName("slide"),
    dots = document.getElementsByClassName("dot"),
    slide_index_number = 1
if (slides.length>0 && dots.length>0) {
    function show_slid(n) {
        let i;slide_index_number
        if (n > slides.length) { slide_index_number = 1}
        if (n < 1) { slide_index_number = slides.length}
        for (i = 0; i < slides.length; i++) {slides[i].classList.replace("show-slide","hidden-slide");}
        for (i = 0; i < dots.length; i++) {dots[i].classList.remove("active");}
        slides[slide_index_number - 1].classList.replace("hidden-slide","show-slide");
        dots[slide_index_number - 1].classList.add("active");
    }
    function auto() {
        show_slid(slide_index_number)
        setTimeout(auto, 10000);
        slide_index_number++
    }
    auto();
    for (let index = 0; index < dots.length; index++) {dots[index].addEventListener("click",()=>{show_slid(slide_index_number = index+1);})}
}

// ----------------------------------------------------------------------------------------------------------------
let faq = document.getElementsByClassName("faq")
for (let index = 0; index < faq.length; index++) {
    const element = faq[index];
    element.addEventListener("click",()=>{
        let faq_title = element.querySelector(".faq-text"),
            faq_icon = element.querySelector("i")
        if (element.classList.contains("faq-active")) {
            faq_title.classList.remove("faq-text-active")
            faq_icon.classList.replace("fa-angle-up","fa-angle-down")
            element.classList.remove("faq-active")
        }
        else{
            faq_title.classList.add("faq-text-active")
            faq_icon.classList.replace("fa-angle-down","fa-angle-up")
            element.classList.add("faq-active")
        }
    })
}