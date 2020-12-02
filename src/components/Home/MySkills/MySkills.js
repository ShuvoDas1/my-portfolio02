import React from 'react';
import './MySkills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const MySkills = () => {
    return (
        <section className='mySkill'>
            <h1 className='text-center text-light'>My Skills</h1>
            <div class="row">
                <div class="col-md-4">
                    <span className=''>
                    <FontAwesomeIcon icon={faCoffee} />
                    </span>
                    <FontAwesomeIcon icon={['fab', 'apple']} />
                </div>
            </div>
        </section>
    );
};

export default MySkills;