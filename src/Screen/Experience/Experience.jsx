import React from "react";
import { experience } from "../../Component/information/information";
import { Container, Grid } from "@mui/material";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Fade } from "react-reveal";



import {ExperienceCard} from "../../Component";

const Experience = () => {
	return experience && (
		<section className="">
			<Container>
				<div className="d-flex p-4">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<WorkHistoryIcon/>
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 text-info">Experience</h4>
					</div>
				</div>
				<Container className="row-grid align-items-start">
					{experience.map((data, i) => {
						return <ExperienceCard key={i} data={data} />;
					})}
				</Container>
			</Container>
		</section>
	);
};

export default Experience;
