import React from "react";
import { Grid, Container, Chip } from "@mui/material";
import { Badge } from 'antd';


import { Fade } from "react-reveal";


const EducationCard = ({ education }) => {
	return (
		<Fade left duration={2000} >
			{/* <Container className="card-lift--hover shadow mt-4">
				<Grid container spacing={1}> */}
					<div className=" px-3 pb-4 shadow Education-Cards-borderRadius" >
						<div className="pl-4"> 
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
				{/* </Grid>
			</Container> */}
		</Fade>
	);
};

export default EducationCard;
