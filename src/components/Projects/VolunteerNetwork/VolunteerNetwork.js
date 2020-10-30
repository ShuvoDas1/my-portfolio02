import React from 'react';
import { Button } from 'react-bootstrap';
import screen1 from '../../../images/volunteer-network1.png'
import screen2 from '../../../images/volunteer-network2.png'
import screen3 from '../../../images/volunteer-network3.png'
import screen4 from '../../../images/volunteer-network4.png'

const VolunteerNetwork = () => {
    return (
        <section>
        <div className='d-flex justify-content-left row ml-3 pl-5 mt-5'>
            <div className="col-12">
                <h2 className='text-center'><strong>Volunteer Network</strong></h2>
                <hr />

                <br />
                <h4 >Description:</h4>
                <ul>
                    <li>This is  a volunteer Network agency where a person can be registered as a volunteer</li>
                    <li>He/She can registered one or more events</li>
                    <li>Before registered User must be login with Google</li>
                    <li>In registration page user fills up a form with the required information</li>
                    <li>An admin can add a new event and also can delete a volunteer from an event</li>
      
                </ul>
                <br />
                <div className='bg-grey'>
                    <h3> Technologies:</h3>
                    {/* <img width='75px' src={reactLogo} alt='' /> */}
                    <h5> React.Js,  Javascript, Firebase , Heroku, Node.js, MongoDB, React-Bootstrap.</h5>

                </div>
                <br />
                <a  href='https://volunteer-network-91a21.web.app/' target='_blank'>
                    <Button>Live Link</Button>
                </a>
                <a className='mx-5' href='https://github.com/ShuvoDas1/volunteer-network' target='_blank'>
                    <Button>Github Link Client</Button>
                </a>
                <a href='https://github.com/ShuvoDas1/volunteer-network-server' target='_blank'>
                    <Button>Github Link Server</Button>
                </a>
                <br />
                <div className='my-5'>
                    <h3> Screenshort:</h3>
                    <div>
                        <img width='500px' src={screen1} alt='' />
                        <img width='500px' className='ml-3' src={screen2} alt='' />
                        <br/>
                        <img className='mt-3' width='500px' src={screen3} alt='' />
                        <img className='mt-3 ml-3' width='500px' src={screen4} alt='' />
                    </div>
                </div>
            </div>
        </div>
</section >
    );
};

export default VolunteerNetwork;