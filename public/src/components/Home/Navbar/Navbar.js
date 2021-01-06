import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <button className="navbar-toggler" onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="nav-title">
                <a href="/home"><h3 className='text-success ml-3 w-100'>Shuvo</h3></a>
            </div>
            <div className="collapse navbar-collapse " id="navbarTogglerDemo03">

                <ul className="navbar-nav m-auto text-black mt-2 mt-lg-0">
                    <li className="nav-item mx-4">
                        <NavLink className='text-decoration-none' to='/home'>Home</NavLink>
                    </li>
                    {/* <li className="nav-item text-dark mx-4">
                        <NavLink className='text-decoration-none' to='/projects'>Projects</NavLink>
                    </li> */}
                    <li className="nav-item mx-4">
                        <NavLink className='text-decoration-none' to='/blog'>blog</NavLink>
                    </li>
                    {/* <li className="nav-item mx-4">
                        <NavLink className='text-decoration-none' to='/aboutMe'>About Me</NavLink>
                    </li> */}
                    <li className="nav-item mx-4">
                        <NavLink className='text-decoration-none' to='/contactMe'>Contact Me</NavLink>
                    </li>
                    <Button className='btn-success px-5' href='https://drive.google.com/file/d/14CTmcyIOD5aXtmqVoTGtsXwyrxZlqpKx/view?usp=sharing' target='_blank' color="transparent" download>Resume</Button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;