import React from 'react';
import { Button } from 'react-bootstrap';
import screen1 from '../../images/travel-guru-page1.png'
import screen2 from '../../images/travel-guru2.png'
import screen3 from '../../images/travel-guru3.png'
import screen4 from '../../images/travel-guru4.png'

const TravelGuru = () => {
    return (
        <section>
            <div className='d-flex justify-content-left  ml-3 pl-5 mt-5 row'>
                <div className=' col-12'>
                    <h2 className='text-center'><strong>Travel Guru</strong></h2>
                    <hr/>
                    
                    <br />
                    <h4 >Description:</h4>
                    <ul>
                        <li>Designed and developed the website using framework React.Js  along with Javascript, React-Bootstrap.</li>
                        <li>A User can see some location in the home page</li>
                        <li>He/She can select a location and after selection he/ she go to booking page</li>
                        <li>Before booking User must be login with Email/Password or Google or Facebook.</li>
                        <li>User Also can see Google map of the booking location.</li>
                    </ul>
                    <br/>
                    <div className='bg-grey'>
                        <h3> Technologies:</h3>
                        <h5>React.Js,  Javascript,  Firebase , Netlify,  React-Bootstrap</h5>
                    
                    </div>
                    <br/>
                    <a href='https://github.com/ShuvoDas1/travel-guru' target='_blank'>
                        <Button>Github Link</Button>
                    </a>
                    <a className='ml-5' href='https://travel-guru-me.netlify.app/' target='_blank'>
                        <Button>Live Link</Button>
                    </a>
                    <br/>
                    <div className='my-5'>
                        <h3> Screenshort:</h3>
                        <div>
                            <img width='500px' src={screen1} alt=''/>
                            <img className='ml-3' width='500px' src={screen2} alt=''/>
                            <img  className='mt-3' width='500px' src={screen3} alt=''/>
                            <img   className='mt-3 ml-3' width='500px' src={screen4} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TravelGuru;