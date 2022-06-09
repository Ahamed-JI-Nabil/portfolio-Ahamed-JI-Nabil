import React from 'react';
import About from './About';
import Intro from './Intro';
import Skills from './Skills';

const Home = () => {
    return (
        <div className='px-14 lg:px-36'>
            <Intro></Intro>
            <About></About>
            <Skills></Skills>
        </div>
    );
};

export default Home;