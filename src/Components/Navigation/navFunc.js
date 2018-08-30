export const goToAboutMe = () => {
	const arrow = document.getElementById("goDown");
	const aboutMeSection = document.getElementById("aboutMe");
	const goToAbout = () => {
		aboutMeSection.scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	}
	arrow.addEventListener("click", goToAbout);
}