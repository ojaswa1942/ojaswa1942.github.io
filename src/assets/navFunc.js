export const navFunctions = () =>{
	goToAboutMe();
	goToHome();
	displayNavBarOnScroll();
	goToSkills();
	goToProjects();
	goToFooter();
}
export const goToFooter = () => {
	const footerSection = document.getElementById("contactMe");
	const navContact = document.getElementById("navContact");
	const goToFooterSection = () => {
		footerSection.scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	}
	navContact.addEventListener("click", goToFooterSection);
}
export const goToProjects = () => {
	const projectsSection = document.getElementById("projectsSection");
	const navProjects = document.getElementById("navProjects");
	const goToProjectsSection = () => {
		projectsSection.scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	}
	navProjects.addEventListener("click", goToProjectsSection);
}
export const goToSkills = () => {
	const skillsSection = document.getElementById("skillsSection");
	const navSkills = document.getElementById("navSkills");
	const goToSkillsSection = () => {
		skillsSection.scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	}
	navSkills.addEventListener("click", goToSkillsSection);
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