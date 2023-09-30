const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});
const scrolledRightElements = document.querySelectorAll(".scrolled-right")
const scrolledLeftElements = document.querySelectorAll(".scrolled-left")
const hiddenElements = document.querySelectorAll(".hidden")
const photosElements = document.querySelectorAll(".photos")
hiddenElements.forEach((el) => observer.observe(el))
scrolledLeftElements.forEach((el) => observer.observe(el))
scrolledRightElements.forEach((el) => observer.observe(el))
photosElements.forEach((el) => observer.observe(el))

