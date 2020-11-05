var hamburgerButton = document.querySelector("#hamburgericoon");
var hamburgerOpen = document.querySelector("#hamburgermenu");
var hamburgerKruisje = document.querySelector("#kruisje");

function toonMobileNav (){
	hamburgerOpen.classList.add("verschijnmenu");
		console.log("hamburger")
}

function verbergMobileNav (){
	hamburgerOpen.classList.remove("verschijnmenu");
console.log("hamburger")
}

hamburgerButton.addEventListener('click', toonMobileNav);
hamburgerKruisje.addEventListener('click', verbergMobileNav);