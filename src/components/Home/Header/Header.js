
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ReactTypingEffect from 'react-typing-effect';
import './Header.css'

const Header = () => {

    const history = useHistory()

    const handleContactMe = () =>{
        history.push('/contactMe');
    }

    return (

            <section className='headerMain'>
                <div className='container'>
                    <h1>HI! I'm Shuvo Das</h1>
                    <ReactTypingEffect
                        text={[" Front End Developer", " MARN Stack  Developer", " Web Developer"]}
                        cursorRenderer={cursor => <h1>{cursor}</h1>}
                        displayTextRenderer={(text, i) => {
                            return (
                                <h3> I'm a
                                    {text.split('').map((char, i) => {
                                        const key = `${i}`;
                                        return (
                                            <span
                                                key={key}
                                                style={i % 2 === 0 ? { color: '#E19D28' } : {}}
                                            >{char}</span>
                                        );
                                    })}

                                </h3>
                            );
                        }}
                    />
                    <br />
                    <div className='mt-3 mt-sm-0'>
                        <Button onClick={handleContactMe} className='px-5 mr-sm-3 '>Contact Me</Button>
                        <Button className='btn-warning px-5 mt-2 mt-sm-0 ' href='https://drive.google.com/file/d/14CTmcyIOD5aXtmqVoTGtsXwyrxZlqpKx/view?usp=sharing' target='_blank' color="transparent" download>Resume</Button>
                    </div>
                </div>

            </section>
    );
};

export default Header;