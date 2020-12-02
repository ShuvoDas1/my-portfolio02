import React from 'react';
import './Footer.css'
import facebook from '../../../images/bxl-facebook.png'
import instagram from '../../../images/bxl-instagram.png'
import whatsapp from '../../../images/bxl-whatsapp.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='bg-dark '>
            <div className='footer text-light row'>
                <div className='socialLink col-md-4 col-12'>
                    <a href="https://www.facebook.com/" target='blank'><img src={facebook}   alt="facebook" /></a>
                    <a href='https://www.instagram.com/' target='blank'><img src={instagram} className='mx-4' alt="ins" /></a>
                    <img  src={whatsapp} alt="whatsapp" />
                </div>
                <div className='col-md-4 my-4 my-md-0 col-12'>
                    <h3 className='text-warning'>Shuvo Das <span style={{color: 'white'}}>||</span> <span className='text-success'>Portfolio</span></h3>
                </div>
                <div className-='col-md-4 col-12'>
                    <p>&copy; {new Date().getFullYear().toString()} All Rights Reserved</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;