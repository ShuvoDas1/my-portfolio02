import React from 'react';
import './Footer.css'
import facebook from '../../../images/bxl-facebook.png'
import instagram from '../../../images/bxl-instagram.png'
import githubFooter from '../../../images/githubFooter.png'
import linkedin from '../../../images/linkedin.png'

const Footer = () => {
    return (
        <section>
            <div className='footer text-light row'>
                <div className='socialLink col-md-4 col-12'>
                    <a href="https://www.facebook.com/" target='blank'><img src={facebook}   alt="facebook" /></a>
                    <a href='https://www.instagram.com/' target='blank'><img src={instagram} className='mx-4' alt="ins" /></a>
                    <a href="https://github.com/ShuvoDas1" target='blank'><img  src={githubFooter} style={{width: '40px'}}  alt="github" /></a>
                    <a href="https://www.linkedin.com/in/shuvodas01/" target='blank'><img  src={linkedin} style={{width: '40px',marginLeft: '5px'}}  alt="github" /></a>
                </div>
                <div className='col-md-4 my-4 my-md-0 col-12'>
                    <h4 className='text-warning'>Shuvo Das <span style={{color: 'white'}}>||</span> <span className='text-success'>Portfolio</span></h4>
                </div>
                <div className-='col-md-4 col-12'>
                    <p>&copy; {new Date().getFullYear().toString()} All Rights Reserved</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;