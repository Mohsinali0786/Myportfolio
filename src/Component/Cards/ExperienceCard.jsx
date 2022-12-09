import React from "react";
import { Fade } from "react-reveal";
import { Grid, Container } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import profilepic from '../../Assets/Images/logo.png'
const ExperienceCard = ({ data }) => {
	return (
		<Fade left duration={2000} >
			<Container className="card-lift--hover shadow mt-4">
				<Grid container spacing={1}>
					<div className="d-flex px-3 pb-4">
						<div className="pl-4">
							<div style={{backgroundColor:'black'}}>
								{/* <img
									// className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
									src={profilepic}
									style={{ objectFit: 'contain', width: '200px' }}
									className="text-info"
								/> */}

							</div>
							<h4 className="text-info">{data.company}</h4>
							<h6 className="text-info">{data.role}</h6>
							<h6 className="text-info Experience-time">{data.date}</h6>
							<div
								className="description my-3 text-left"
							>
								{data.desc}
								<ul>
									{data.descBullets
										? data.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
										})
										: null}
								</ul>
							</div>

						</div>
					</div>
				</Grid>
			</Container>
		</Fade>
	);
};

export default ExperienceCard;
