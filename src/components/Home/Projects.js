import React from 'react';
import ProjectSlider from './ProjectSlider';

const Projects = () => {

    return (
        <div className='static'>
            <div className="flex py-5 items-center mb-28" id='projects'>
                <h2 className="lg:text-2xl text-xl lg:mr-4 font-mono">0.3 <span className=' text-teal-200 mr-2'>Projects</span> </h2>
                <div className="lg:w-48 w-28 border-t border-gray-400"></div>
            </div>
            <ProjectSlider></ProjectSlider>
        </div>
    );
};

export default Projects;