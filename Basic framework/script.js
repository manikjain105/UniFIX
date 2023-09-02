let burger=document.querySelector(".burger");
let navbar=document.querySelector(".navbar");
let navlist=document.querySelector(".navlist");
let search=document.querySelector(".search");
burger.addEventListener("click",()=>{
   navbar.classList.toggle("nav-h");
    navlist.classList.toggle("v-class");
    search.classList.toggle("v-class");
})