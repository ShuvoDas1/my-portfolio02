import React from 'react';
import { Button } from 'react-bootstrap';
import screen1 from '../../../images/creative-agency1.png'
import screen2 from '../../../images/creative-agency2.png'
import screen3 from '../../../images/creative-agency3.png'
import screen4 from '../../../images/creative-agency4.png'

const CreativeAgency = () => {
    return (
        <div>
            <section>
            <div className='d-flex justify-content-left row ml-3 pl-5 mt-5'>
                <div className='col-12'>
                    <h2 className='text-center'><strong>Creative Agency</strong></h2>
                    <hr/>
                    
                    <br />
                    <h4 >Description:</h4>
                    <ul>
                        <li>This is a single page website</li>
                        <li>In Home page has some services and some work review and client feedback</li>
                        <li>An user can select a service and after login he/she can ordered a service</li>
                        <li>In dashboard user can ordered and see his/her ordered services</li>
                        <li>In dashboard an admin can create a new admin also can create a new service</li>
                    </ul>
                    <br/>
                    <div>
                        <h3> Technologies:</h3>
                        {/* <img width='75px' src={reactLogo} alt=''/> */}
                        <h5>React.Js, React-Bootstrap, Javascript, Firebase , Heroku, Node.js, Mongodb</h5>
                    
                    </div>
                    <br/>
                    <a  href='https://creative-agency-e98ca.web.app/' target='_blank'>
                        <Button>Live Link</Button>
                    </a>
                    <a className='mx-5' href='https://github.com/ShuvoDas1/creative-agency-client' target='_blank'>
                        <Button>Github Link Client</Button>
                    </a>
                    <a href='https://github.com/ShuvoDas1/creative-agency-server' target='_blank'>
                        <Button>Github Link Server</Button>
                    </a> 
                    <br/>
                    <div className='my-5'>
                        <h3> Screenshort:</h3>
                        <div>
                            <img width='500px' src={screen1} alt=''/>
                            <img className='ml-3' width='500px' src={screen2} alt=''/>
                            <img  className='mt-5 ' width='500px' src={screen3} alt=''/>
                            <img   className='mt-5 ml-3' width='500px' src={screen4} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default CreativeAgency;