let navbar = document.querySelector(".navbar")
let toggleMenu = document.querySelector(".toggle")
toggleMenu.addEventListener("click",function(){
    navbar.classList.toggle("active")
})

let videos = document.querySelectorAll(".boult")
let video = document.querySelector(".video")
videos.forEach(btn =>{
    btn.onclick = ()=>{
        let src = btn.getAttribute("data-src");
        video.src = src

    }
})