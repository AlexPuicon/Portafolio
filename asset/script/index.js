const menuIcon = document.querySelector(".image_menu");
const menuList = document.querySelector(".menu");

menuIcon.addEventListener("click",() => {
    menuList.classList.toggle("visible")
})