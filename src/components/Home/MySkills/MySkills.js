import React, { useEffect } from 'react';
import './MySkills.css'
import Aos from "aos";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import html from '../../../images/html.svg'
import javascript from '../../../images/javascript.svg';
import react from '../../../images/react.png';
import redux from '../../../images/redux.svg';
import sass from '../../../images/sass.svg';
import reactRouter from '../../../images/react-router.svg';
import reactBootstrap from '../../../images/react-bootstrap.svg';
import material from '../../../images/material-ui.svg';
import css from '../../../images/css3.svg';
import nodeJs from '../../../images/nodeJs.png';
import expressJs from '../../../images/expressJs.png';
import mongoDB from '../../../images/mongoDB.png';
import firebase from '../../../images/firebase.png';
import es6 from '../../../images/es6.png';
import heroku from '../../../images/heroku.png';
import netlify from '../../../images/netlify.jpg';
import github from '../../../images/github.png';
import vscode from '../../../images/vscode.png';
import jira from '../../../images/jira.jpg';

const MySkills = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000,
            offset: 300

        })
    }, [])

    return (
        <section className='mySkill py-5'>
            <div className="container mt-0 py-5">
                <h1 className='text-center text-light' data-aos='fade-down'>MY SKILLS</h1>
                <div class="row">
                    <div class="col-md-6 col-12 frontend" data-aos='fade-right' >
                        <div className='d-flex'>
                            <img src={javascript} alt="javascript" />
                            <h4 className='text-light mt-3'>Javascript</h4>
                        </div>
                        <div className='d-flex'>
                            <img src={es6} alt="react" />
                            <h4 className='text-light mt-3'>ES6</h4>
                        </div>
                        <div className='d-flex'>
                            <img src={react} alt="react" />
                            <h4 className='text-light mt-3'>React Js</h4>
                        </div>
                        <div className='d-flex'>
                            <img src={redux} alt="react" />
                            <h4 className='text-light mt-3'>Redux</h4>
                        </div>
                        <div className='d-flex'>
                            <img src={sass} alt="react" />
                            <h4 className='text-light mt-3'>Sass</h4>
                        </div>
                        <div className='d-flex'>
                            <img src={reactRouter} alt="react" />
                            <h4 className='text-light mt-3'>React Router</h4>
                        </div>
                        <div className='d-flex'>
                            <img src={reactBootstrap} alt="react" />
                            <h4 className='text-light mt-3'>React Bootstrap</h4>
                        </div>
                        <div className='d-flex'>
                            <img src={material} alt="react" />
                            <h4 className='text-light mt-3'>Material-UI</h4>
                        </div>
                        <div className='d-flex'>
                            <img src={html} alt="react" />
                            <h4 className='text-light mt-5'>HTML5</h4>
                        </div>
                        <div className='d-flex'>
                            <img src={css} alt="react" />
                            <h4 className='text-light mt-4'>CSS3</h4>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 pl-md-5  backend" data-aos='fade-left'>
                        <div>
                            <img src={nodeJs} alt="javascript" />
                            <h4 className='text-light mt-5' style={{display:'inline'}}>NodeJs</h4>
                        </div>
                        <div>
                            <img src={expressJs} alt="javascript" />
                            <h4 className='text-light mt-5' style={{display:'inline'}}>ExpressJs</h4>
                        </div>
                        <div>
                            <img src={mongoDB} alt="javascript" />
                            <h4 className='text-light mt-5' style={{display:'inline'}}>MongoDB</h4>
                        </div>
                        <div>
                            <img src={firebase} alt="javascript" />
                            <h4 className='text-light mt-5' style={{display:'inline'}}>Firebase</h4>
                        </div>
                        <div>
                            <img src={heroku} alt="javascript" />
                            <h4 className='text-light mt-5' style={{display:'inline'}}>Heroku</h4>
                        </div>
                        <div>
                            <img src={netlify} alt="javascript" />
                            <h4 className='text-light mt-5' style={{display:'inline'}}>Netlify</h4>
                        </div>
                        <div>
                            <img src={github} alt="javascript" />
                            <h4 className='text-light mt-5' style={{display:'inline'}}>Github</h4>
                        </div>
                        <div>
                            <img src={vscode} alt="javascript" />
                            <h4 className='text-light mt-5' style={{display:'inline'}}>VsCode</h4>
                        </div>
                        {/* <div>
                            <img src={jira} alt="javascript" />
                            <h4 className='text-light mt-5' style={{display:'inline'}}>Jire</h4>
                        </div> */}
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default MySkills;