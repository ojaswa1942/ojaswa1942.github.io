import React from 'react';
import './Projects.css'

const Projects = () =>{
	return(
		<div className='about pt5' id='projectsSection'>
			<div className="" id='projectsSection-container'>
				<h1 className="projectHead f1 dark-green animated bounce"> 
					Projects 
				</h1>

					<div className="" id='projectsSection-cards'>
						
						<div className='card bg-dark-green dib br3 pa3 ma2 grow bw2 shadow-5'>
							<img  alt='Project' src ={`https://robohash.org/123?200x200`} className='projectPic'/>
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

						<div className='card bg-dark-green dib br3 pa3 ma2 grow bw2 shadow-5'>
							<img  alt='Project' src ={`https://robohash.org/123?200x200`} className='projectPic'/>
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


					</div>
			</div>
		</div>
		);
}

export default Projects;