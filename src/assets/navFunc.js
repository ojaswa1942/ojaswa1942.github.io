export const navFunctions = () =>{
	goToAboutMe();
	goToHome();
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
	const welcomSection = document.getElementById("Welcome");
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

