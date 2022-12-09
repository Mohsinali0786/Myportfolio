import React, { useEffect } from "react";
import { greetings } from "../information/information";
import { Grid,Container} from "@mui/material";
import { Navigation,SocialLinks,GreetingLottie} from "../../Component";
import Button from '@mui/material/Button';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import codingAnimation from '../../Assets/Lottie/96428-portfolio.json'
import CV from '../../Assets/MyCV.pdf'

import { useNavigate } from "react-router-dom";

const About = () => {
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    });
    const ResumeBtn=(mylink)=>{
        window.open(mylink)

    }
    return (
        <main>
            <div className="position-relative">
                <Navigation />
                <section className="section section-lg section-shaped pb-250">
                    <div className="shape shape-style-1 bg-gradient-info">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <Container className="py-lg-md d-flex">
						<div className="col px-0">
							<Grid container spacing={1}>
								<Grid items xs={12} md={6} >
									<h1 className="display-3 text-white">
										{greetings.title + " "}
									</h1>
									<p className="lead text-white">
										{greetings.description}
									</p>
									<SocialLinks />
									<div className="btn-wrapper my-4">
										<Button
											className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
											// color="default"
                                            // sx={{backgroundColor:'white'}}
                                            variant='contained'
                                            onClick={()=>ResumeBtn(greetings.resumeLink)}
											// href={greetings.resumeLink}
										>
											<span className="btn-inner--icon mr-1">
												<InsertDriveFileIcon/>
											</span>
											<span className="btn-inner--text">
												See My Resume
											</span>
											{/* <a className="btn-inner--text" href={CV} download="FileName.pdf">Download My Resume</a> */}
										</Button>
									</div>
								</Grid>
								<Grid items xs={12} md={6}>
									<GreetingLottie codingAnimation={codingAnimation} />
								</Grid>
							</Grid>
						</div>
					</Container>
                    {/* SVG separator */}
                    <div className="separator separator-bottom separator-skew">
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
					</div>
                </section>
                {/* 1st Hero Variation */}
            </div>
        </main>
    );
};

export default About;
