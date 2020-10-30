import React, { useState } from 'react';

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
                    <li className="nav-item text-dark mx-4">
                        <a className="nav-link" href="/home">home</a>
                    </li>
                    <li className="nav-item text-dark mx-4">
                        <a className="nav-link" href="/projects">Projects</a>
                    </li>
                    <li className="nav-item mx-4">
                        <a className="nav-link" href="/blog">Blog</a>
                    </li>
                    <li className="nav-item mx-4">
                        <a className="nav-link" href="/resume">Resume</a>
                    </li>
                    <li className="nav-item mx-4">
                        <a className="nav-link" href="aboutme">About Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;