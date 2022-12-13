import React from "react";

import { projects } from "../../Component/information/information";
import { Container, Grid } from "@mui/material";
import { ProjectsCard } from "../../Component";
import TvIcon from '@mui/icons-material/Tv';
import { Fade } from "react-reveal";

const Projects = () => {
	return projects && (
		<section className="section section-lg">
			<Container>
				<div className="d-flex p-4">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<TvIcon/>
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 text-info">Projects</h4>
					</div>
				</div>
				<Grid container className="row-grid align-items-center projects-card-maindiv">
					{projects.map((data, i) => {
						return (
							<Grid xs={12} sm={6} md={6} className='Project-Cards'>
								<ProjectsCard key={i} data={data} />;
							</Grid>
						)
					})}
				</Grid>
			</Container>
		</section>
	);
};

export default Projects;
