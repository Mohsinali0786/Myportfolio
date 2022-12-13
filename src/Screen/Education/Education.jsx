import React from "react";
import { EducationCard } from "../../Component"
import { educationInfo } from "../../Component/information/information";
import { Grid, Container } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
	return educationInfo && (
		<section className="section pb-0 bg-gradient-info my-5">
			<Container maxWidth="xl">
				<div className="d-flex px-3 Education-Heading">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<SchoolIcon />
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 text-white">Education</h4>
					</div>
				</div>
				<div className=" Education-Cards-Maindiv">
					<Grid container spacing={1}>
						{educationInfo.map((info) => {
							return (
								<Grid
									item
									xs={12}
									sm={6}
									md={4}
									className="Education-card-div card-lift--hover mt-4"
									key={info.schoolName}
								>
									<EducationCard education={info} />
								</Grid>
							);
						})}

					</Grid>
				</div>
			</Container>

		</section>


	);
};

export default Education;
