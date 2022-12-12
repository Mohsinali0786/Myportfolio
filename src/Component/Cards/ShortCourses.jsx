import React from "react";

import { Container, Grid, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Fade } from "react-reveal";
import { Chip } from "@mui/material";
const ShortCourses = ({ courses }) => {
    console.log('DTATATA', courses)
    return (
        // <Container className=''>
            <Fade bottom duration={2000}>
                <Grid className="shadow-lg--hover shadow mt-4 shortcourse-card-grid" >
                    {/* <Grid className="" > */}
                        <div className="d-flex px-3" >
                            <div className="pl-4">
                                <h5 className="text-info" >
                                    {courses.schoolName}
                                </h5>
                                <div>
                                    <Chip className='chipText' label={courses.duration} color="success" />
                                </div>
                                <h6>{courses.subHeader}</h6>
                            </div>
                        </div>
                    {/* </Grid > */}
                </Grid>
            </Fade>
        // </Container>
    );
};

export default ShortCourses;
