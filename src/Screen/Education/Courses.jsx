import React from "react";
import { ShortCourses } from "../../Component/index"
import { ShortCoursesData } from "../../Component/information/information";
import { Grid, Container } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School';

const ShortCoursesScreen = () => {
    return ShortCoursesData && (
        <section className="section pb-0 bg-gradient-info my-5">
            <Container maxWidth='xl'>
                <div className="d-flex  Education-Heading ">
                    <div>
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                            <SchoolIcon />
                        </div>
                    </div>
                    <div className="pl-4">
                        <h4 className="display-3 text-white">Short Courses</h4>
                    </div>
                </div>
                <div className=" Education-Cards-Maindiv">
                    <Grid container spacing={1}>
                        {ShortCoursesData.map((info) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} className=''>

                                    {/* <h1 style={{backgroundColor:'red'}}>Hello</h1> */}
                                    <ShortCourses courses={info} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>
            </Container>
        </section>
    );
};

export default ShortCoursesScreen;
