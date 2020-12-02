import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import volunteerNetwork from '../../../images/volunteer-network-project.png'
import travelGuru from '../../../images/travel-guru-project.png'
import creativeAgency from '../../../images/creative-agency-project.png';
import emaJohnSimple from '../../../images/ema-john-simple.png';
import weather from '../../../images/weather-app.png'
import hardRock from '../../../images/hardRock.png'
import powerXGym from '../../../images/power-x-gym.jpg';
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
        <section className='projectsList my-5'>
            <div className=" mt-1">
                <h1 className='text-center pt-5  text-success'>MY PROJECTS</h1>
                <div className="card container mb-3" data-aos="fade-right">
                    <div className="row no-gutters">
                        <div className="col-md-6 col-xs-12 col-sm-12" >
                            <img src={emaJohnSimple} className="card-img"  alt="..." />
                        </div>
                        <div className="col-md-6 col-xs-12 col-sm-12">
                            <div className="card-body">
                                <h1 className="card-title text-danger">Ema-John-Simple</h1>
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
                                <h1 className="card-title text-danger"> Volunteer-Network</h1>
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
                                <h1 className="card-title text-danger">Weather-App</h1>
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
                                <h1 className="card-title text-danger">Travel-Guru</h1>
                                <h4 className="card-text text-left">This is a Travel-Agency website. Designed and developed the website using framework React.Js  along with Javascript, React-Bootstrap.</h4>
                            </div>
                            <div className='d-flex flex-row justify-content-left mx-2 technology text-light'>
                                <h4 >ReactJs</h4>
                                <h4>Javascript</h4>
                                <h4>Firebase</h4>
                            </div>
                            <div className=' py-5'>
                                    <a href='https://travel-guru-me.netlify.app/' target='_blank'>
                                        <Button className='btn btn-danger px-5 float-left'>Live Link</Button>
                                    </a>
                                    <a href='https://github.com/ShuvoDas1/weather-app' target='_blank'>
                                        <Button className='btn btn-danger px-5 mr-2 float-right'>Github</Button>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
                {/* <div className="card container mb-3" data-aos="fade-down">
                    <div className="row no-gutters">
                        <div className="col-md-6 col-xs-12 col-sm-12" >
                            <img src={travelGuru} className="card-img"  alt="..." />
                        </div>
                        <div className="col-md-6 col-xs-12 col-sm-12">
                            <div className="card-body">
                                <h1 className="card-title text-danger">Travel-Guru</h1>
                                <h4 className="card-text text-left">This is a Travel-Agency website. Designed and developed the website using framework React.Js  along with Javascript, React-Bootstrap.</h4>
                            </div>
                            <div className='d-flex flex-row justify-content-left mx-2 technology text-light'>
                                <h4 >ReactJs</h4>
                                <h4>Javascript</h4>
                                <h4>Firebase</h4>
                            </div>
                            <div className=' py-5'>
                                    <a href='https://travel-guru-me.netlify.app/' target='_blank'>
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
                                <h1 className="card-title text-danger">P</h1>
                                <h4 className="card-text text-left">This is a Travel-Agency website. Designed and developed the website using framework React.Js  along with Javascript, React-Bootstrap.</h4>
                            </div>
                            <div className='d-flex flex-row justify-content-left mx-2 technology text-light'>
                                <h4 >ReactJs</h4>
                                <h4>Javascript</h4>
                                <h4>Firebase</h4>
                            </div>
                            <div className=' py-5'>
                                    <a href='https://travel-guru-me.netlify.app/' target='_blank'>
                                        <Button className='btn btn-danger px-5 float-left'>Live Link</Button>
                                    </a>
                                    <a href='https://github.com/ShuvoDas1/weather-app' target='_blank'>
                                        <Button className='btn btn-danger px-5 mr-2 float-right'>Github</Button>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div> */}
                
            </div>

            <div className='seeMoreProjects'>
                <button className='btn btn-info seeMoreBtn p-2' style={{fontSize: '25px'}}>See More Projects</button>
            </div>
           
            {/* <div className='projectsCard'>
                <div className="row">
                    
                    
                    <div className="col-md-4 col-12">
                        <div className="card mt-4" data-aos="fade-left" style={{ width: "25rem" }}>
                            <img className="card-img-top" src={weather} alt="Card image cap" />
                            <div className="card-body bg-dark text-white">
                                <h4 className="card-title">Wather-App</h4>
                                <hr className='bg-white' />
                                <h6 className="card-text">This is a Weather app.Search your city and see the temperature and fills like status</h6>
                                <div className='float-end  pt-5'>
                                    <a href='https://shuvodas1.github.io/weather-app/' target='_blank'>
                                        <Button className='btn btn-danger px-4 float-left'>Live Link</Button>
                                    </a>
                                    <a href='https://travel-guru-me.netlify.app/' target='_blank'>
                                        <Button className='btn btn-danger px-5 float-right'>Github</Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div />
                <div>
                    <div class="row ml-1">
                        <div className="col-md-4 col-12">
                            <div className="card mt-4" data-aos="fade-right" style={{ width: "25rem" }}>
                                <img className="card-img-top" src={travelGuru} alt="Card image cap" />
                                <div className="card-body bg-dark text-white">
                                    <h4 className="card-title">Travel Guru</h4>
                                    <hr className='bg-white' />
                                    <h6 className="card-text">This is a Travel-Agency website. Designed and developed the website using framework React.Js  along with Javascript, React-Bootstrap.</h6>
                                    <div className='float-end  pt-5'>
                                        <a href='https://travel-guru-me.netlify.app/' target='_blank'>
                                            <Button className='btn btn-danger px-5 float-left'>Live Link</Button>
                                        </a>
                                        <a href='https://travel-guru-me.netlify.app/' target='_blank'>
                                            <Button className='btn btn-danger px-5 float-right'>Github</Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4  col-12">
                            <div className="card mt-4" data-aos="fade-up" style={{ width: "25rem" }}>
                                <img className="card-img-top" src={powerXGym} style={{ height: '200px' }} alt="Card image cap"/>
                                <div className="card-body bg-dark text-white">
                                    <h4 className="card-title">Power-X-Gym</h4>
                                    <hr className='bg-white' />
                                    <h6 className="card-text">This is my team project.We were three team member in this project. This is a Gym Website with devices responsive</h6>
                                    <div className='float-end  pt-5'>
                                        <a href='https://power-x-gym-project.web.app/' target='_blank'>
                                            <Button className='btn btn-danger px-4 float-left'>Live Link</Button>
                                        </a>
                                        <a href='https://github.com/ShuvoDas1/power-x-gym-project' target='_blank'>
                                            <Button className='btn btn-danger px-5 float-right'>Github</Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="card mt-4" data-aos="fade-left" style={{ width: "25rem" }}>
                                <img className="card-img-top" src={hardRock} alt="Card image cap" />
                                <div className="card-body bg-dark text-white">
                                    <h4 className="card-title">Hard Rock</h4>
                                    <hr className='bg-white' />
                                    <h6 className="card-text">This is a Hard Rock website. You can search a song in the search box and show ten results</h6>
                                    <div className='float-end  pt-5'>
                                        <a href='https://shuvodas1.github.io/hard-rock/' target='_blank'>
                                            <Button className='btn btn-danger px-4 float-left'>Live Link</Button>
                                        </a>
                                        <a href='https://github.com/ShuvoDas1/hard-rock' target='_blank'>
                                            <Button className='btn btn-danger px-5 float-right'>Github</Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section >
    )

};

export default ProjectList;