let slideIndex = 0;
showSlides();

function showSlides() {
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	setTimeout(showSlides, 6000); // Change image every 2 seconds
}

const txt = document.querySelector(".learn_more");
const btn = document.querySelector(".btn_learn_more");

function toggle() {
	if (txt.style.overflow === "hidden") {
		txt.style.overflow = "visible";
	} else {
		txt.style.overflow = "hidden";
	}
}

window.onscroll = function () {
	myFunction();
};

const navbar = document.querySelector(".nav-bar");
const navBar = document.querySelector(".main-nav");
const burgerIcon = document.querySelector(".burger-icon");
const wrapper = document.querySelector(".wrapper");
const sticky = navbar.offsetTop;

burgerIcon.addEventListener("click", () => {
	wrapper.classList.toggle("nav-bar-active");
	// burgerIcon.classList.toggle("burger-icon-passive");
	wrapper.style.position = "relative";
	wrapper.style.right = "115px";
	wrapper.style.top = "23px";
});

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navBar.classList.add("sticky");
		navBar.style.width = "0";
		navBar.style.backgrounColor = "green";
		navBar.style.border = "1px solid green";
		navBar.style.width = "100%";
		navBar.style.backgroundColor = "rgb(184, 107, 0)";
		navBar.style.height = "0";
		burgerIcon.style.position = "absolute";
		burgerIcon.style.left = "0";
		burgerIcon.style.top = "0";
	} else {
		navBar.classList.remove("sticky");
		navBar.style.width = "0";
	}
}
