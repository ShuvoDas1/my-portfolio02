
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';


const Header = () => {
    return (
        <section>
            <Row className="justify-content-center mt-5">
                <Col lg={5} s={12} md={5} style={{ marginLeft: '100px' }}>
                    <div>
                        <h1>HI! I'm Shuvo Das</h1>
                        <h3>Web Developer</h3>
                    </div>
                    <p>I am studing BSC in CSE at East Delta University</p>
                    <small>Download my resume</small>
                    <br />
                    <Button href='https://drive.google.com/file/d/1F30AkcJRTBm8oKv3ffM42o4VAuEmhF5M/view?usp=sharing' color="transparent">Download</Button>
                    {/* <p>Click here on button to download the PDF file.</p>
                    <a class="btn btn-primary" href="MyRuseme" download>
                        <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                    Download PDF
                    </a> */}

                </Col>
                <Col lg={6} md={6} s={12}>
                </Col>
            </Row>
        </section>
    );
};

export default Header;