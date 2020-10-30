import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import screen1 from '../../images/resume-part1.png'
import screen2 from '../../images/resume-part2.png'
import screen3 from '../../images/resume-part3.png'
import screen4 from '../../images/resume-part4.png'
// import screen5 from '../../images/resume-part5.png'

const Resume = () => {
    return (
        <section className='ml-5 my-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1>My Resume</h1>
                </div>
                <div className='col-md-6'>
                <h5>Download My Resume</h5>
                <Button href='https://drive.google.com/file/d/1F30AkcJRTBm8oKv3ffM42o4VAuEmhF5M/view?usp=sharing' color="transparent">Download</Button>
                </div>
            </div>
            <div className='row d-flex justify-content-center mt-4'> 
                <div className='col-md-10 col-sm-10'>
                    <img src={screen1} alt=''/>
                </div>
                <div className='col-md-10 col-sm-10'>
                    <img src={screen2} alt=''/>
                </div>
                <div className='col-md-10 col-sm-10 ml-4'>
                    <img src={screen3} alt=''/>
                </div>
                <div className='col-md-10 col-sm-10 mt-3 ml-4'>
                    <img src={screen4} alt=''/>
                </div>
            </div>
        </section>
    );
};

export default Resume;