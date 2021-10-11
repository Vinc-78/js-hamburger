const hMenu = document.querySelector(".hamburger-menu");
const openButton = document.querySelector(".fa-bars");

openButton.addEventListener("click",
    function() {
        hMenu.classList.add("active");
    }
)

const closeButton = document.querySelector(".fa-times");

closeButton.addEventListener("click",
    function() {
        hMenu.classList.remove("active");
    }
)