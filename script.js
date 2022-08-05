const show = document.querySelector(".btn");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");

show.addEventListener("click", function onClick(){
    menu.classList.add("show");
});

close.addEventListener("click", function onClick(){
    menu.classList.remove("show");;
});