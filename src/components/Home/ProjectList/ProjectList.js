import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import volunteerNetwork from '../../../images/volunteer-network-project.png'
import travelGuru from '../../../images/travel-guru-project.png'
import creativeAgency from '../../../images/creative-agency-project.png'
import emaJohnSimple from '../../../images/ema-john-simple.png'
import './ProjectList.css'

const ProjectList = () => {
    return (
        <section className='py-4'>
            <h2 className='text-center pb-3 text-success'>My Projects</h2>
            <div className='row'>
                <div className='col-md-4 col-12'>
                    <div className="card" style={{ width: "25rem" }}>
                        <div className='front'>
                            <img src={emaJohnSimple} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 class="card-title">Ema-John-Simple</h5>
                            <a href='https://ema-john-simple-ca876.web.app/' target='_blank'>
                                <Button className='btn btn-danger px-4 float-left'>Live Link</Button>
                            </a>
                            <a href='https://github.com/ShuvoDas1/ema-john-simple' target='_blank'>
                                <Button className='btn btn-danger px-4 float-right'>Github</Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-12'>
                    <div className="card" style={{ width: "25rem" }}>
                        <img src={volunteerNetwork} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 class="card-title">Volunteer Network</h5>
                            <a href='https://volunteer-network-91a21.web.app/' target='_blank'>
                                <Button className='btn btn-danger px-4 float-left'>Live Link</Button>
                            </a>
                            <a href='https://github.com/ShuvoDas1/volunteer-network' target='_blank'>
                                <Button className='btn btn-danger px-4 float-right'>Github</Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-12 '>
                    <div className="card" style={{ width: "25rem" }}>
                        <img src={travelGuru} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 class="card-title">Travel Guru</h5>
                            <a href='https://travel-guru-me.netlify.app/' target='_blank'>
                                <Button className='btn btn-danger px-4 float-left'>Live Link</Button>
                            </a>
                            <a href='https://github.com/ShuvoDas1/travel-guru' target='_blank'>
                                <Button className='btn btn-danger px-4 float-right'>Github</Button>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div className='col-md-4 col-12'>
                        <div className="card" style={{ width: "25rem" }}>
                            <img src={creativeAgency} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 class="card-title">Creative Agency</h5>
                                <a href='https://creative-agency-e98ca.web.app/' target='_blank'>
                                    <Button className='btn btn-danger px-4 float-left'>Live Link</Button>
                                </a>
                                <a href='https://github.com/ShuvoDas1/creative-agency-client' target='_blank'>
                                    <Button className='btn btn-danger px-4 float-right'>Github</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="maincontainer">
                <div class="back">
                    <div className='mb-5 pb-5'>
                        <h2>Ema-John-Simple</h2>
                        <p>This is a e-commarce site where a user can see all item in the shop page.User must be login with google.He/she can order one or more item.must be login with google.He/she can order one or more item.</p>
                    </div>
                    <br/>
                    <div className='float-end mt-5 pt-5'>
                        <a href='https://ema-john-simple-ca876.web.app/' target='_blank'>
                            <Button className='btn btn-danger px-4 float-left'>Live Link</Button>
                        </a>
                        <a href='https://github.com/ShuvoDas1/ema-john-simple' target='_blank'>
                            <Button className='btn btn-danger px-4 float-right'>Github</Button>
                        </a>
                    </div>
                </div>
                <div class="front">
                    <div class="image">
                        <img src={emaJohnSimple} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectList;