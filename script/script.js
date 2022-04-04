wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 190
});
    wow.init();
let menu = document.getElementById("menu");
let ul = document.getElementById("list");
let open = document.getElementsByClassName("open");
let li = document.querySelectorAll("nav li");
let h = document.getElementById("h");


let a = document.querySelectorAll("nav a");

menu.addEventListener('click', function () {
    // if (menu.hasAttribute("class") === false) {
    //     ul.classList.add("open");
    if (ul.style.display == "flex"){
        ul.style.display = "none";
        
    }
    else {
        menu.style.display = "flex";
        ul.style.display = "flex";  
    }
        li.forEach(element => {
            element.classList.toggle("li_active");
        });
        a.forEach(element => {
            element.classList.toggle("link_active");
            element.style.border = "none";
        });
         ul.classList.toggle("open");
    
    // }
    // else {
    //     ul.classList.remove("open");
    //     menu.style.display = "none";
    //     console.log("good");
    // }

});

window.addEventListener('scroll', function () {
    
    if (this.scrollY >= 46 && this.scrollY <597 || this.scrollY >= 2507 && this.scrollY < 2955 ) {
        h.style.backgroundColor = "white";
    }
    else {
        h.style.background = "#ffede9"
    }
});