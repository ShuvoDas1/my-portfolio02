
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import myPic from '../../../images/edu-pic.jpg'
import './Header.css'
const Header = () => {
    return (
        <section className='header'>
            <Row className="justify-content-center p-5">
                <Col  s={12} md={5} className='text-center'>
                    <div>
                        <h1>HI! I'm Shuvo Das</h1>
                        <h3>Web Developer</h3>
                    </div>
                    <p>I am studing BSC in CSE at East Delta University</p>
                    <small>Download my resume</small>
                    <br />
                    <Button href='https://drive.google.com/file/d/1F30AkcJRTBm8oKv3ffM42o4VAuEmhF5M/view?usp=sharing' color="transparent" download>Download</Button>

                </Col>
                <Col lg={6} s={12}>
                    <img className='myPic' src={myPic} alt=''  />
                </Col>
            </Row>
        </section>
    );
};

export default Header;