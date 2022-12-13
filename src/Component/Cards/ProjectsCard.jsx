import React from "react";

import { Container, Grid, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Fade } from "react-reveal";
import { ImageCarousel } from "../";
import { Image } from 'antd'


const ProjectsCard = ({ data }) => {
	return (
		<Container className='ProjectCard-Radius'>
			<Fade bottom duration={2000} >
				<Grid className="shadow-lg--hover shadow mt-4" >
					<Grid >
						<div className="" style={{ display: 'flex', flexDirection:'row',justifyContent:'center'}} >
							<div className="">
								<h3>{data.name}</h3>
								{/* <div style={{textAlign:'center'}}> */}
								{/* <ImageCarousel /> */}
								{/* <img src={data?.img} className='ProjectCards-Images'/> */}
								<div style={{ display: 'flex', flexDirection:'row',justifyContent:'center'}}>
									{
										data?.image?.map((v) => {
											console.log('VVVVVVVV',v)
											return (
												< Image
													className='ProjectCards-Images'
													src={v}
												/>

											)

										})
									}
								</div>
								<p className="description mt-3">{data.desc}</p>
								{data.github ? (
									<Button
										className="btn-icon"
										href={data.github}
										target="_blank"

									>
										<span className="btn-inner--icon project-icondiv">
											<GitHubIcon className="github-icons" />
											<Button sx={{ color: 'white' }}>View Github</Button>
										</span>
									</Button>
								) : null}
								{/* </div> */}
							</div>
						</div>
					</Grid>
				</Grid>
			</Fade>

		</Container>
	);
};

export default ProjectsCard;
