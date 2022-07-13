import React from 'react';

import { IconContext } from 'react-icons/lib';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {

    return (
        <div>
            <div className='lg:absolute lg:left-10 lg:bottom-64 bg-slate-900 py-4'>
                <div className=' lg:fixed flex lg:flex-col lg:items-center '>
                    <div className="border border-l-gray-400 lg:w-0 lg:h-32 mt-4 h-0 w-32 lg:hidden"></div>
                    <IconContext.Provider value={{ size: "1.3em" }}>
                        <a href="https://www.facebook.com/AhamedJINabil"><FaFacebook className='m-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '></FaFacebook></a>
                        <a href="https://www.instagram.com/l__nabil__l/"><FaInstagram className='m-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '></FaInstagram></a>
                        <a href="https://github.com/Ahamed-JI-Nabil"><FaGithub className='m-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '></FaGithub></a>
                        <a href="https://www.linkedin.com/in/ahamedjinabil/"><FaLinkedin className='m-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '></FaLinkedin></a>
                    </IconContext.Provider>
                    <div className="border border-l-gray-400 lg:w-0 lg:h-32 mt-4 h-0 w-32"></div>
                </div>
            </div >
            <div className='hidden lg:block lg:absolute lg:right-20 lg:bottom-96 bg-slate-900  py-4'>
                <div className='lg:fixed flex lg:flex-col lg:items-center'>
                    <a className='font-mono font-thin w-0 text-xl lg:rotate-90 lg:mb-60' href="mailto:ahamedjinabil@gmail.com">ahamedjinabil@gmail.com</a>
                    <div className="border border-l-gray-400 lg:w-0 lg:h-32 mt-4 h-0 w-32"></div>
                </div>
            </div>
        </div>
    );
};

export default SocialLinks;