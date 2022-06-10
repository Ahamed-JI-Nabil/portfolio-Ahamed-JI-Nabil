import React from 'react';
import Typewriter from 'typewriter-effect';

const Intro = () => {

    return (
        <div className='lg:mt-20 mt-12 lg:pb-40 pb-36'>
            <p className='text-base font-mono mb-2'>Hi, my name is</p>
            <h2 className="lg:text-7xl text-4xl font-serif text-teal-200 italic py-4">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Ahamed Johayir Iqbal <span style="color: #34d399">(Nabil)</span>')
                            .pauseFor(2500)
                            .deleteAll()
                            .start()
                            .deleteAll()
                            .start()
                            .deleteAll()
                            .start()

                    }}
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                ></Typewriter>
            </h2>
            <p className='lg:text-2xl font-bold font-mono mt-4 '>Junior Web Developer</p>
            <a href="https://drive.google.com/file/d/1R6Q30V9WdNs8UF6ydtGzBwtd_rWI8q7K/view?usp=drivesdk"><button className="btn my-4 hover:translate-x-2 hover:text-teal-200">Get Resume</button></a>
            <a href="#about"><button className="btn my-4 hover:translate-x-2 hover:text-teal-200 ml-4">About Me</button></a>
        </div >
    );
};

export default Intro;