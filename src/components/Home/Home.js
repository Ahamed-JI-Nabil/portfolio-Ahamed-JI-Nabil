import React from 'react';
import About from './About';
import Intro from './Intro';

const Home = () => {
    return (
        <div className='px-14 lg:px-36'>
            <Intro></Intro>
            <About></About>
        </div>
    );
};

export default Home;