new WOW().init();
let menu = document.getElementById("menu");
let ul = document.getElementById("list");
let open = document.getElementsByClassName("open");
let li = document.querySelectorAll("nav li");


let a = document.querySelectorAll("nav a");


menu.onclick = function () {
        if(!menu.hasAttribute("class")){
        ul.classList.add("open");
        menu.style.display = "flex";
            ul.style.display = "flex";
            li.forEach(element => {
                element.classList.add("li_active");
            });
             a.forEach(element => {
                 element.classList.add("link_active");
                 element.style.border = "none";
            });
        //  ul.classList.toggle("open");
    
    }
        else {
            ul.classList.remove("open");
    menu.style.display = "none";
}

    }

