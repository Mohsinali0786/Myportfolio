import React from "react";

import { Container, Grid, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Fade } from "react-reveal";
import { Chip } from "@mui/material";
const ShortCourses = ({ courses }) => {
    console.log('DTATATA', courses)
    return (
        <Container className="card-lift--hover shadow mt-4 Cousrse-Cards-borderRadius" >
            <Fade bottom duration={2000}>
                {/* <Grid className="" > */}
                <div className=" px-3 pb-4 shadow " >
                    <div className="pl-4 Course-innerCard-height">
                        <h5 className="text-info" >
                            {courses.schoolName}
                        </h5>
                        <div>
                            <Chip className='' label={courses.duration} color="primary" />
                        </div>
                        <h6>{courses.subHeader}</h6>
                    </div>
                </div>
            </Fade>
        </Container>
    );
};

export default ShortCourses;
