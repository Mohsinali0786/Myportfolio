import React from "react";
import { Grid, Container, Chip } from "@mui/material";
import { Badge } from 'antd';


import { Fade } from "react-reveal";


const EducationCard = ({ education }) => {
	return (
		<Container className="card-lift--hover shadow mt-4 Education-Cards-borderRadius" >
			<Fade left duration={2000} >
				<div className=" px-3 pb-4 shadow" >
					<div className="pl-4 EducardCard-innerCard-height">
						<h5 className="text-info">
							{education.schoolName}
						</h5>
						<div>
							<Chip label={education.duration} color="primary" />

							{education.grade && (
								<Chip className='chipText' label={education.grade} color="success" />
							)}
						</div>
						<h6>{education.subHeader}</h6>
					</div>
				</div>
			</Fade>
		</Container>
	);
};

export default EducationCard;
