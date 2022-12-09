import React from "react";

import { Container, Grid, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
	return (
		<Container >
			<Fade bottom duration={2000} >
				<Grid className="shadow-lg--hover shadow mt-4">
					<Grid>
						<div className="d-flex px-3">
							<div className="pl-4">
								<h3>{data.name}</h3>
								<p className="description mt-3">{data.desc}</p>
								{data.github ? (
									<Button
										className="btn-icon"
										href={data.github}
										target="_blank"

									>
										<span className="btn-inner--icon project-icondiv">
											<GitHubIcon className="github-icons"/>
											<Button sx={{color:'white'}}>View Github</Button>
										</span>
									</Button>
								) : null}
							</div>
						</div>
					</Grid>
				</Grid>
			</Fade>
		</Container>
	);
};

export default ProjectsCard;
