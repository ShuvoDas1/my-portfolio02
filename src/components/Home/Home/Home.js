import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import MySkills from '../MySkills/MySkills';
import Navbar from '../Navbar/Navbar';
import ProjectList from '../ProjectList/ProjectList';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ProjectList></ProjectList>
            <Footer></Footer>
        </div>
    );
};

export default Home;