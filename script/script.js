let menu = document.getElementById("menu");
let ul = document.getElementById("list");
let open = document.getElementsByClassName("open");
// console.log(ul);
let li = document.getElementById("li");
let li2 = document.getElementById("li2");
let li3 = document.getElementById("li3");
let li4 = document.getElementById("li4");
let li5 = document.getElementById("li5");


let a = document.getElementById("a");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");
let a5 = document.getElementById("a5");


menu.onclick = function () {
        if(!menu.hasAttribute("class")){
        ul.classList.add("open");
        menu.style.display = "flex";
        ul.style.display = "flex";
        li.classList.add("li_active");
        li2.classList.add("li_active");
        li3.classList.add("li_active");
        li4.classList.add("li_active");
        li5.classList.add("li_active");

        a.classList.add("link_active");
        a.style.border = "none";
        a2.classList.add("link_active");
        a2.style.border = "none";
        a3.classList.add("link_active");
        a3.style.border = "none";

        a4.classList.add("link_active");
        a4.style.border = "none";

        a5.classList.add("link_active");
        a5.style.border = "none";
    }
        else {
            ul.classList.remove("open");
    menu.style.display = "none";
}

    }

