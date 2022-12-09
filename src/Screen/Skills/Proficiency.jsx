import React from "react";
import { SkillBars } from "../../Component/information/information";
// import { Container, Row, Progress, Col } from "reactstrap";
import { Grid, Container } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress';
import { Fade } from "react-reveal";
import { GreetingLottie } from "../../Component";
import buildLottie from '../../Assets/Lottie/115649-build-your-prototype.json'

const Proficiency = () => {
	return SkillBars && (
		<Container className="">
			<Fade bottom duration={2000} >
				<Grid container>
					<Grid md={6}>
						<h1 className="h1">Proficiency</h1>
						{SkillBars.map((skill) => {
							return (
								<div
									className="progress-info"
									key={skill.Stack}
								>
									<div className="progress-label">
										<span>{skill.Stack}</span>
									</div>
									<div className="progress-percentage">
										<span>{skill.progressPercentage}%</span>
									</div>
									<LinearProgress variant="determinate" value={skill.progressPercentage} />
								</div>
							);
						})}
					</Grid>
					<Grid md={6}>
						<GreetingLottie codingAnimation={buildLottie} />
					</Grid>
				</Grid>
			</Fade>
		</Container>
	);
};

export default Proficiency;
