import React from 'react';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import './ContactMe.css'

const ContactMe = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data,e) => {
        e.preventDefault();

        emailjs.sendForm('service_deygipl', 'template_bh15yzb', e.target,'user_mk4eGaKGs3zMADB7SHdMY')
        .then((result) => {
            alert('Email send Successfully');
        }, (error) => {
            console.log(error.text);
        });
    };

    console.log(watch("example"));
    return (
        <section className='bg-dark contactMain'>
            <div ClassName='container formMain mt-5 pt-5'>
                <h2 className='text-center mb-3 text-light'>Contact Me</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='contactForm'>

                    <div className='form-group'>
                        <input className='form-control' name="example" placeholder='Name' ref={register} />
                    </div>
                    <div className='form-group'>
                        <input className='form-control' name="email" placeholder='Email' ref={register({ required: true })} />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className='form-group'>
                        <textarea className='form-control' name="message" ref={register({ required: true })} />
                        {errors.message && <span>This field is required</span>}
                    </div>

                    <input  className='btn btn-success form-control' type="submit" />
                </form>
            </div>
        </section>
    );
};

export default ContactMe;