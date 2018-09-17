import React from 'react';
import './Projects.css'
import p1 from '../../assets/projects/p1.png'
import p2 from '../../assets/projects/p2.png'
import p3 from '../../assets/projects/p3.png'
import p4 from '../../assets/projects/p4.png'
import p5 from '../../assets/projects/p5.png'
import p6 from '../../assets/projects/p6.png'
import p7 from '../../assets/projects/p7.png'
import p8 from '../../assets/projects/p8.png'

const Projects = () =>{
	return(
		<div className='about pt5' id='projectsSection'>
			<div className="" id='projectsSection-container'>
				<h1 className="projectHead f1 dark-green animated bounce"> 
					Projects 
				</h1>

					<div className="mh2" id='projectsSection-cards'>
						
						<div className='card bg-dark-green dib br3 pa3 ma3 grow bw2 shadow-5'>
							<img  alt='Project' src ={p1} className='projectPic'/>
							<div>
								<h2>
									<a href='https://face-recogniti.herokuapp.com/' className='link underline white dim'>
										Face Recognition Web App
									</a>
								</h2>
								<p>
									A full-stack working web application using Clarifai Web API for face detection in an image, with website designed using REACTjs, server using NODE with EXPRESS.js and PostgreSQL for database. The server, the database and the front-end are all deployed on Heroku.
								</p>
							</div>
						</div>

						<div className='card bg-dark-green dib br3 pa3 ma3 grow bw2 shadow-5'>
							<img  alt='Project' src ={p2} className='projectPic'/>
							<div>
								<h2>
									<a href='https://ojaswa1942.github.io/robofriends' className='link underline white dim'>
										Robo Friends Web App
									</a>
								</h2>
								<p>
									An entry-level web application made using REACT, which views contact cards of robot friends and a search bar which dynamically searches with input.	The application later integrated with REDUX can be found <a href='https://github.com/ojaswa1942/robofriends-redux' className='link underline white dim'>here</a>. 							
								</p>
							</div>
						</div>

						<div className='card bg-dark-green dib br3 pa3 ma3 grow bw2 shadow-5'>
							<img  alt='Project' src ={p3} className='projectPic'/>
							<div>
								<h2>
									<a href='https://ojaswa1942.github.io/Snake-Game' className='link underline white dim'>
										Snake Game
									</a>
								</h2>
								<p>
									A self-made version of the classic snake game, created using Vanilla JavaScript, CSS and HTML.
									The server has been created using NODE + ExpressJS, integrated with database using PostgreSQL, hosted on Heroku.
								</p>
							</div>
						</div>

						<div className='card bg-dark-green dib br3 pa3 ma3 grow bw2 shadow-5'>
							<img  alt='Project' src ={p4} className='projectPic'/>
							<div>
								<h2>
									<a href='https://ojaswa1942.github.io/startup-landing-page/' className='link underline white dim'>
										StartX Landing Page
									</a>
								</h2>
								<p>
									Designed a sample template for a landing page of a startup, namely StartX, made using HTML, CSS and Bootstrap. It has a subscription form made using Mailchimp API.
								</p>
							</div>
						</div>

						<div className='card bg-dark-green dib br3 pa3 ma3 grow bw2 shadow-5'>
							<img  alt='Project' src ={p5} className='projectPic'/>
							<div>
								<h2>
									<a href='https://ojaswa1942.github.io/background-generator/' className='link underline white dim'>
										Background Generator
									</a>
								</h2>
								<p>
									Choosing a right gradient has always been a headache and this gradient background generator simplifies the process. It generates live gradient from chosen colors and displays its CSS code for usage. 
								</p>
							</div>
						</div>

						<div className='card bg-dark-green dib br3 pa3 ma3 grow bw2 shadow-5'>
							<img  alt='Project' src ={p7} className='projectPic'/>
							<div>
								<h2>
									<a href='http://thehaze.atwebpages.com/index.php' className='link underline white dim'>
										The Haze
									</a>
								</h2>
								<p>
									TheHaze is a full-stack classified web application intended for students of ABV-IIITM, Gwalior to facilitate trade among peers. It allow users to post and view advertisments. The website has been designed using HTML, CSS, Bootstrap, JS and PHP.
								</p>
							</div>
						</div>

						<div className='card bg-dark-green dib br3 pa3 ma3 grow bw2 shadow-5'>
							<img  alt='Project' src ={p6} className='projectPic'/>
							<div>
								<h2>
									<a href='http://ojaswa1942.github.io/Dancing-Droid' className='link underline white dim'>
										Dancing Droid
									</a>
								</h2>
								<p>
									Dancing-droid depicts CSS properties such keyframes, animations, transitions and flex. It also involves styling and scaling of elements to provide them the required shape. Try out the ultimate dance.
								</p>
							</div>
						</div>

						<div className='card bg-dark-green dib br3 pa3 ma3 grow bw2 shadow-5'>
							<img  alt='Project' src ={p8} className='projectPic'/>
							<div>
								<h2>
									<a href='http://ojaswa1942.github.io/' className='link underline white dim'>
										Personal Website
									</a>
								</h2>
								<p>
									This is my personal website made from scratch using ReactJS. It intends to showcase information about me.
								</p>
							</div>
						</div>

					</div>
			</div>
		</div>
		);
}

export default Projects;