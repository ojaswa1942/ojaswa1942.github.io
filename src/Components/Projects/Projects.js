import React from 'react';
import './Projects.css'
import p1 from '../../assets/projects/p1.png'
import p2 from '../../assets/projects/p2.png'

const Projects = () =>{
	return(
		<div className='about pt5' id='projectsSection'>
			<div className="" id='projectsSection-container'>
				<h1 className="projectHead f1 dark-green animated bounce"> 
					Projects 
				</h1>

					<div className="" id='projectsSection-cards'>
						
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


					</div>
			</div>
		</div>
		);
}

export default Projects;