import React from 'react';

const Intro = () => {
    return (
        <div className='lg:mt-20 mt-12 lg:pb-40 pb-36'>
            <p className='text-base font-mono mb-2'>Hi, my name is</p>
            <h1 className='lg:text-7xl text-4xl font-serif text-teal-200 italic'>Ahamed Johayir Iqbal <span>(Nabil)</span></h1>
            <p className='lg:text-2xl font-bold font-mono mt-4 '>Junior Web Developer</p>
            <a href="https://drive.google.com/file/d/1R6Q30V9WdNs8UF6ydtGzBwtd_rWI8q7K/view?usp=drivesdk"><button class="btn my-4 hover:translate-x-2 hover:text-teal-200">Get Resume</button></a>
            <a href="#about"><button class="btn my-4 hover:translate-x-2 hover:text-teal-200 ml-4">About Me</button></a>
        </div>
    );
};

export default Intro;