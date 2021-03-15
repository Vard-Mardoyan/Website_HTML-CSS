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

//do not work by using click
// btn.addEventListener("click", () => {
//   console.log(toggle())
// })

window.onscroll = function () {
	myFunction();
};

const navbar = document.querySelector(".nav-bar");
const navBar = document.querySelector(".main-nav");
const wrapper = document.querySelector(".wrapper");
const nav_bar_links = document.querySelector(".nav_bar_links");
const sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navBar.classList.add("sticky");
		navBar.style.width = "0";
		navBar.style.backgrounColor = "green";
		navBar.style.border = "1px solid green";
		navBar.style.width = "100%";
		navBar.style.backgroundColor = "rgb(184, 107, 0)";
		navBar.style.height = "0";
	} else {
		navBar.classList.remove("sticky");
		navBar.style.width = "0";
	}
}
