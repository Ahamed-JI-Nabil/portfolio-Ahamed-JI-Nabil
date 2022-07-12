import React from 'react';
import SocialLinks from '../Shared/SocialLinks';
import About from './About';
import Contact from './Contact';
import Intro from './Intro';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div className='px-14 lg:px-36 '>
            <Intro></Intro>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <SocialLinks></SocialLinks>
        </div>
    );
};

export default Home;