import React from "react";
import {EducationCard} from "../../Component"
import { educationInfo } from "../../Component/information/information";
import {Grid,Container} from '@mui/material'
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
	return educationInfo && (
		<section className="section pb-0 bg-gradient-info my-5">
			<Container>
				<div className="d-flex px-3 Education-Heading">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<SchoolIcon/>
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 text-white">Education</h4>
					</div>
				</div>
				<Grid container spacing={1} className=" Education-Cards-Maindiv">
					{educationInfo.map((info) => {
						return (
							<Grid
								item
								md={4}
								className="Education-card-div card-lift--hover mt-4"
								key={info.schoolName}
								sx={{backgroundColor:'white'}}
								
							>
								<EducationCard education={info} />
							</Grid>
						);
					})}
				</Grid>
			</Container>
			{/* <div className="separator separator-bottom separator-skew zindex-100">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 2560 100"
					x="0"
					y="0"
				>
					<polygon
						className="fill-white"
						points="2560 0 2560 100 0 100"
					/>
				</svg>
			</div> */}
		</section>
	);
};

export default Education;
