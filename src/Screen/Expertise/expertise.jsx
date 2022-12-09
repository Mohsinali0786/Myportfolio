import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import { Fade } from "react-reveal";
import { Grid, Container } from '@mui/material'
import { GreetingLottie } from "../../Component";
import { skillsSection } from "../../Component/information/information";
import LLOTIE from '../../Assets/Lottie/123532-coding.json'

const Skills = () => {
    return skillsSection && (
        <Container className="text-center section ">
            <h1 className="h1">{skillsSection.title}</h1>
            <p className="lead">{skillsSection.subTitle}</p>
            {skillsSection.data.map((section, index) => {
                return (
                    <Grid container spacing={1} className="my-5" key={index} sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Grid items md={6} className="order-2 order-lg-1" >
                            <Fade left duration={2000}>
                                <GreetingLottie
                                    codingAnimation={section.lottieAnimationFile}
                                />
                            </Fade>
                        </Grid>
                        <Grid items md={6} className="order-1 order-lg-2">
                            <Fade right duration={2000}>
                                <h3 className="h3 mb-2">{section.title}</h3>
                                <div className="d-flex justify-content-center flex-wrap mb-2">
                                    {section.softwareSkills.map((skill, i) => {
                                        return (
                                            <Fragment key={i}>
                                                <div
                                                    className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                                                    id={skill.skillName.replace(/\s/g, '')}
                                                >
                                                    <Icon
                                                        icon={
                                                            skill.fontAwesomeClassname
                                                        }
                                                        data-inline="false"
                                                    ></Icon>
                                                </div>

                                            </Fragment>
                                        );
                                    })}
                                </div>
                                <div>
                                    {section.skills.map((skill, i) => {
                                        return <p key={i}>{skill}</p>;
                                    })}
                                </div>
                            </Fade>
                        </Grid>
                    </Grid>
                );
            })}
        </Container>
    );
};

export default Skills;
