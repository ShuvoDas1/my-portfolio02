import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarTogglerDemo03">

                <ul className="navbar-nav m-auto text-black mt-2 mt-lg-0">
                    <li className="nav-item mx-4">
                        <NavLink className='text-decoration-none ' to='/home'>Home</NavLink>
                    </li>
                    <li className="nav-item text-dark mx-4">
                        <NavLink className='text-decoration-none' to='/projects'>Projects</NavLink>
                    </li>
                    <li className="nav-item mx-4">
                        <NavLink className='text-decoration-none' to='/blog'>blog</NavLink>
                    </li>
                    <li className="nav-item mx-4">
                        <NavLink className='text-decoration-none' to='/aboutMe'>About Me</NavLink>
                    </li>
                    <li className="nav-item mx-4">
                        <NavLink className='text-decoration-none' to='/contactMe'>Contact Me</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;