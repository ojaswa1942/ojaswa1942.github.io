export const navFunctions = () =>{
	goToAboutMe();
	goToHome();
	displayNavBarOnScroll();
}

export const goToAboutMe = () => {
	const arrow = document.getElementById("goDown");
	const aboutMeSection = document.getElementById("aboutMe");
	const navAboutMe = document.getElementById("navAboutMe");
	const goToAbout = () => {
		aboutMeSection.scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	}
	arrow.addEventListener("click", goToAbout);
	navAboutMe.addEventListener("click", goToAbout);
}
export const goToHome = () => {
	const welcomSection = document.getElementById("welcome");
	const navHome = document.getElementById("navHome");
	const navLogo = document.getElementById("navLogo");
	const goToHomeSection = () => {
		welcomSection.scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	}
	navHome.addEventListener("click", goToHomeSection);
	navLogo.addEventListener("click", goToHomeSection);
}

export const displayNavBarOnScroll = () => {
	const navBar = document.getElementById("navBar");
	const scrollFunction = () =>{
		if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
			navBar.style.top = "0";
			navBar.classList.remove('fadeOutUp');
			navBar.classList.add('fadeInDown');
		} else{
			// navBar.style.top = "-100px";
			navBar.classList.remove('fadeInDown');
			navBar.classList.add('fadeOutUp');
		}
	}
	window.addEventListener("scroll", scrollFunction);
}