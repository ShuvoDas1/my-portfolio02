import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import volunteerNetwork from '../../../images/volunteer-network-project.png'
import travelGuru from '../../../images/travel-guru-project.png'
import emaJohnSimple from '../../../images/ema-john-simple.png';
import weather from '../../../images/weather-app.png'
import creativeAgency from '../../../images/creative_agency.png'
import Aos from "aos";
import "aos/dist/aos.css";
import './ProjectList.css'

const ProjectList = () => {

    useEffect(() => {
        Aos.init({
             duration: 2000, 
             offset: 300
        
        })
    }, [])



    return (
        <section className='projectsList py-5'>
            <div className=" mt-1">
                <h1 className='text-center pt-5  text-white' data-aos='fade-down'>MY PROJECTS</h1>
                <div className="card container mb-3" data-aos="fade-right">
                    <div className="row no-gutters">
                        <div className="col-md-6 col-xs-12 col-sm-12" >
                            <img src={creativeAgency} className="card-img"  alt="..." />
                        </div>
                        <div className="col-md-6 col-xs-12 col-sm-12">
                            <div className="card-body">
                                <h2 className="card-title text-danger">Creative Agency</h2>
                                <h4 className="card-text text-left">This is a full-stack website. This website has a user and admin dashboard. User and admin can go to the dashboard with google login authentication. A user can see his/her ordered services and also give some review which is shown on the home page. An admin can add services, add new admin, and can see all user ordered services.</h4>
                            </div>
                            <div className='d-flex flex-row justify-content-left mx-lg-2  technology text-light'>
                                <h4 >ReactJs</h4>
                                <h4>Firebase</h4>
                                <h4>MongoDB</h4>
                                <h4>NodeJs</h4>
                            </div>
                            <div className=' py-5'>
                                    <a href='https://creative-agency-e98ca.web.app/' target='blank'>
                                        <Button className='btn btn-danger px-5 float-left'>Live Link</Button>
                                    </a>
                                    <a href='https://github.com/ShuvoDas1/creative-agency-client' target='blank'>
                                        <Button className='btn btn-danger px-5 mr-2 float-right'>Github</Button>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="card container mb-3" data-aos="fade-right">
                    <div className="row no-gutters">
                        <div className="col-md-6 col-xs-12 col-sm-12" >
                            <img src={emaJohnSimple} className="card-img"  alt="..." />
                        </div>
                        <div className="col-md-6 col-xs-12 col-sm-12">
                            <div className="card-body">
                                <h2 className="card-title text-danger">Ema-John-Simple</h2>
                                <h4 className="card-text text-left">This is a e-commarce site where a user can see all item in the shop page.User must be login with google.He/she can order one or more item.must be login with google.He/she can order one or more item.</h4>
                            </div>
                            <div className='d-flex flex-row justify-content-left mx-lg-2  technology text-light'>
                                <h4 >ReactJs</h4>
                                <h4>Firebase</h4>
                                <h4>MongoDB</h4>
                                <h4>NodeJs</h4>
                            </div>
                            <div className=' py-5'>
                                    <a href='https://ema-john-simple-ca876.web.app/' target='_blank'>
                                        <Button className='btn btn-danger px-5 float-left'>Live Link</Button>
                                    </a>
                                    <a href='https://github.com/ShuvoDas1/ema-john-simple' target='_blank'>
                                        <Button className='btn btn-danger px-5 mr-2 float-right'>Github</Button>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="card container mb-3" data-aos="fade-left">
                    <div className="row no-gutters">
                        <div className="col-md-6 col-xs-12 col-sm-12" >
                            <img src={volunteerNetwork} className="card-img"  alt="..." />
                        </div>
                        <div className="col-md-6 col-xs-12 col-sm-12">
                            <div className="card-body">
                                <h2 className="card-title text-danger"> Volunteer-Network</h2>
                                <h4 className="card-text text-left">This is Full-Stack website of volunteer Agency. A user can register as a volunteer in the particular event. Admin can handle them</h4>
                            </div>
                            <div className='d-flex flex-row justify-content-left mx-2 technology text-light'>
                                <h4 >ReactJs</h4>
                                <h4>Firebase</h4>
                                <h4>React-Bootstrap</h4>
                            </div>
                            <div className=' py-5'>
                                    <a href='https://volunteer-network-91a21.web.app/' target='_blank'>
                                        <Button className='btn btn-danger px-5 float-left'>Live Link</Button>
                                    </a>
                                    <a href='https://github.com/ShuvoDas1/volunteer-networke' target='_blank'>
                                        <Button className='btn btn-danger px-5 mr-2 float-right'>Github</Button>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="card container mb-3" data-aos="fade-right">
                    <div className="row no-gutters">
                        <div className="col-md-6 col-xs-12 col-sm-12" >
                            <img src={weather} className="card-img"  alt="..." />
                        </div>
                        <div className="col-md-6 col-xs-12 col-sm-12">
                            <div className="card-body">
                                <h2 className="card-title text-danger">Weather-App</h2>
                                <h4 className="card-text text-left">This is a Weather app.Search your city and see the temperature and fills like status</h4>
                            </div>
                            <div className='d-flex flex-row justify-content-left mx-2 technology text-light'>
                                <h4 >Javascript</h4>
                                <h4>Weather API</h4>
                                <h4>HTML5 and CSS3</h4>
                            </div>
                            <div className=' py-5'>
                                    <a href='https://shuvodas1.github.io/weather-app/' target='_blank'>
                                        <Button className='btn btn-danger px-5 float-left'>Live Link</Button>
                                    </a>
                                    <a href='https://github.com/ShuvoDas1/weather-app' target='_blank'>
                                        <Button className='btn btn-danger px-5 mr-2 float-right'>Github</Button>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="card container mb-3" data-aos="fade-down">
                    <div className="row no-gutters">
                        <div className="col-md-6 col-xs-12 col-sm-12" >
                            <img src={travelGuru} className="card-img"  alt="..." />
                        </div>
                        <div className="col-md-6 col-xs-12 col-sm-12">
                            <div className="card-body">
                                <h2 className="card-title text-danger">Travel-Guru</h2>
                                <h4 className="card-text text-left">This is a Travel-Agency website. Designed and developed the website using framework React.Js  along with Javascript, React-Bootstrap.</h4>
                            </div>
                            <div className='d-flex flex-row justify-content-left mx-2 technology text-light'>
                                <h4>ReactJs</h4>
                                <h4>Javascript</h4>
                                <h4>Firebase</h4>
                            </div>
                            <div className=' py-5'>
                                    <a href='https://travel-guru-me.netlify.app/' target='_blank'>
                                        <Button className='btn btn-danger px-5 float-left'>Live Link</Button>
                                    </a>
                                    <a href='https://github.com/ShuvoDas1/travel-guru' target='_blank'>
                                        <Button className='btn btn-danger px-5 mr-2 float-right'>Github</Button>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
                
                
            </div>

            {/* <div className='seeMoreProjects'>
                <button className='btn btn-info seeMoreBtn p-2' style={{fontSize: '25px'}}>See More Projects</button>
            </div> */}
           
            
        </section >
    )

};

export default ProjectList;