import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import volunteerNetwork from '../../../images/volunteer-network-project.png'
import travelGuru from '../../../images/travel-guru-project.png'
import creativeAgency from '../../../images/creative-agency-project.png'
const ProjectList = () => {
    return (
        <section className='my-5 mx-3'>
            <h3 className='text-center pb-3 text-success'>My Projects</h3>
            <div className='row'>
                <div className='col-md-4 col-12'>
                    <div className="card" style={{ width: "25rem" }}>
                        <img src={volunteerNetwork} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 class="card-title">Volunteer Network</h5>
                            <a href='https://volunteer-network-91a21.web.app/' target='_blank'>
                                <Button>Live Link</Button>
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
                                <Button>Live Link</Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-12'>
                    <div className="card" style={{ width: "25rem" }}>
                        <img src={creativeAgency} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 class="card-title">Creative Agency</h5>
                            <a href='https://creative-agency-e98ca.web.app/' target='_blank'>
                                <Button>Live Link</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectList;