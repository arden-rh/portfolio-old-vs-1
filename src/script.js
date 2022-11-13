const menuBtn = document.getElementById("menu-button");

const menuList = document.getElementById("menu");

const menuArrow = document.getElementById("top-button");

const navLogo = document.getElementById("nav-logo");

/* menuBtn.onclick = function () {
menuBtn.classList.toggle("menu-open");
menuList.classList.toggle("menu-open");
menuArrow.classList.toggle("menu-open");
navLogo.classList.toggle("menu-open");
}

menuList.onclick = function (clickEvent) {
	if (clickEvent.target.id !== "menu" && clickEvent.target.id !== "menu-button") {
		menuBtn.classList.remove("menu-open");
		menuList.classList.remove("menu-open");
		menuArrow.classList.remove("menu-open");
		navLogo.classList.remove("menu-open");
	}
} */


menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle("menu-open");
	menuList.classList.toggle("menu-open");
	menuArrow.classList.toggle("menu-open");
	navLogo.classList.toggle("menu-open");
});

menuList.addEventListener('click', (clickEvent) => {
	if (clickEvent.target.id !== "menu" && clickEvent.target.id !== "menu-button") {
		menuBtn.classList.remove("menu-open");
		menuList.classList.remove("menu-open");
		menuArrow.classList.remove("menu-open");
		navLogo.classList.remove("menu-open");
	}
})