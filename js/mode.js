const tog = document.getElementById('check');

const container = document.querySelector(".container");
const ho = document.querySelector(".headOptions");
const is = document.querySelector(".inputSpace");
const bts = document.querySelector(".buttons");
const logo = document.querySelector(".theme-text");

tog.addEventListener('click', ()=>{
    container.classList.toggle("light");
    ho.classList.toggle("headOptions-light");
    is.classList.toggle("inputSpace-light");
    bts.classList.toggle("buttons-light");
})