
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
                    <div className='mt-3'>
                        <Button onClick={handleContactMe} className='px-5 mr-3'>Contact Me</Button>
                        <Button className='btn-warning px-5' href='https://drive.google.com/file/d/1HS_FgIRJ_TQP6giaQLouRbY5Pap1r4Ha/view?usp=sharing' target='_blank' color="transparent" download>Resume</Button>
                    </div>
                </div>

            </section>
    );
};

export default Header;