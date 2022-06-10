import React from 'react';
import me from '../../images/me.png'

const About = () => {
    return (
        <div className='lg:pb-32' id='about'>
            <div className="relative flex py-5 items-center">
                <h2 className="lg:text-2xl text-xl lg:mr-4 font-mono">0.1 <span className=' text-teal-200 mr-2'>About Me</span> </h2>
                <div className="lg:w-48 w-28 border-t border-gray-400"></div>
            </div>
            <div className='lg:flex lg:flex-row-reverse items-center justify-evenly  w-full' >
                <img className='w-96 my-16 lg:my-0' src={me} alt="AhamedJINabil" />
                <p className='max-w-md text-teal-200 pb-20 lg:pb-0'>
                    Hello! I'm Ahamed Johayir Iqbal (Nabil), a junior web developer. I develop web applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I'm studying bachelor degree in Computer Science Engineering at Sounteast University. I am available for any kind of job opportunity that suits my interests.
                </p>
            </div>
        </div>
    );
};

export default About;