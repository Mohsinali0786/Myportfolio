import React from "react";

import { Grid, Container } from "@mui/material";
import profilepic from '../../Assets/Images/mypic.jpg'

import { SocialLinks } from "../../Component"
import Avatar from '@mui/material/Avatar';


const ProfileCard = ({ prof }) => {
	return (
		<div className=" bg-gradient-info shadow-lg border-0">
			<Container className="">
				<div className="p-2">
					<Grid container className="">
						<Grid className="order-lg-2" items sm={12} md={4}>
							<Avatar
								alt="Remy Sharp"
								// className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
								src={profilepic}
								style={{ height: '150px', width: '150px'}}
							/>
						</Grid>
						<Grid items sm={12} md={8} className="order-lg-1">
							<h2 className="text-white">Reach Out to me!</h2>
							<p className="lead text-white mt-3">
								DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY
								INBOX IS OPEN FOR ALL
							</p>
							<p className="text-white mt-3">Full Stack Web Developer</p>
							<SocialLinks />
							<p className="text-white mt-2 contact-info">Contact info +92-321-2097195</p>
						</Grid>
					</Grid>
				</div>
			</Container>
		</div>
	);
};

export default ProfileCard;
