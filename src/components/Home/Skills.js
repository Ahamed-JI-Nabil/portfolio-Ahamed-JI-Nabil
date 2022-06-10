import React from 'react';
import js from '../../images/java-script.png'
import html from '../../images/html-5.png'
import css from '../../images/css.png'
import bt from '../../images/bootstrap.png'
import tw from '../../images/tailwind.png'
import git from '../../images/github.png'
import react from '../../images/react.png'
import vscode from '../../images/vs code.png'
import heroku from '../../images/heroku.png'
import firebase from '../../images/firebase.png'
import mongodb from '../../images/mongodb.png'
import node from '../../images/node.png'

const Skills = () => {
    return (
        <div className='lg:pb-40 pb-36 lg:px-36 mt-9' id='skills'>
            <div className="relative flex py-5 items-center ">
                <h2 className="lg:text-2xl text-xl mr-4 font-mono">0.2 <span className=' text-teal-200'>Skills</span> </h2>
                <div className="lg:w-48 w-32 border-t border-gray-400"></div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-2 gap-4 mt-16'>
                <div class="border border-emerald-500 rounded-md  shadow-xl lg:w-44 w-36 px-6 py-4">
                    <div class="lg:saturate-50 hover:saturate-100 transition ease-in-out delay-150 hover:-translate-y-1 flex-wrap flex justify-center">
                        <img src={js} className="w-11 mb-2" alt="" />
                        <input type="range" min="0" max="100" value="65" class="range-accent" />
                    </div>
                </div>
                <div class="border border-emerald-500 rounded-md  shadow-xl lg:w-44 w-36 px-6 py-4">
                    <div class="lg:saturate-50 hover:saturate-100 transition ease-in-out delay-150 hover:-translate-y-1 flex-wrap flex justify-center">
                        <img src={html} className="w-11 mb-2" alt="" />
                        <input type="range" min="0" max="100" value="90" class="range-accent" />
                    </div>
                </div>
                <div class="border border-emerald-500 rounded-md  shadow-xl lg:w-44 w-36 px-6 py-4">
                    <div class="lg:saturate-50 hover:saturate-100 transition ease-in-out delay-150 hover:-translate-y-1 flex-wrap flex justify-center">
                        <img src={css} className="w-11 mb-2" alt="" />
                        <input type="range" min="0" max="100" value="85" class="range-accent" />
                    </div>
                </div>
                <div class="border border-emerald-500 rounded-md  shadow-xl lg:w-44 w-36 px-6 py-4">
                    <div class="lg:saturate-50 hover:saturate-100 transition ease-in-out delay-150 hover:-translate-y-1 flex-wrap flex justify-center">
                        <img src={bt} className="w-11 mb-2" alt="" />
                        <input type="range" min="0" max="100" value="90" class="range-accent" />
                    </div>
                </div>
                <div class="border border-emerald-500 rounded-md  shadow-xl lg:w-44 w-36 px-6 py-4">
                    <div class="lg:saturate-50 hover:saturate-100 transition ease-in-out delay-150 hover:-translate-y-1 flex-wrap flex justify-center">
                        <img src={tw} className="w-11 py-3 mb-2" alt="" />
                        <input type="range" min="0" max="100" value="90" class="range-accent" />
                    </div>
                </div>
                <div class="border border-emerald-500 rounded-md  shadow-xl lg:w-44 w-36 px-6 py-4">
                    <div class="lg:saturate-50 hover:saturate-100 transition ease-in-out delay-150 hover:-translate-y-1 flex-wrap flex justify-center">
                        <img src={react} className="w-11 mb-2" alt="" />
                        <input type="range" min="0" max="100" value="70" class="range-accent" />
                    </div>
                </div>
                <div class="border border-emerald-500 rounded-md  shadow-xl lg:w-44 w-36 px-6 py-4">
                    <div class="lg:saturate-50 hover:saturate-100 transition ease-in-out delay-150 hover:-translate-y-1 flex-wrap flex justify-center">
                        <img src={git} className="w-11 mb-2" alt="" />
                        <input type="range" min="0" max="100" value="65" class="range-accent" />
                    </div>
                </div>
                <div class="border border-emerald-500 rounded-md  shadow-xl lg:w-44 w-36 px-6 py-4">
                    <div class="lg:saturate-50 hover:saturate-100 transition ease-in-out delay-150 hover:-translate-y-1 flex-wrap flex justify-center">
                        <img src={vscode} className="w-11 mb-2" alt="" />
                        <input type="range" min="0" max="100" value="75" class="range-accent" />
                    </div>
                </div>
                <div class="border border-emerald-500 rounded-md  shadow-xl lg:w-44 w-36 px-6 py-4">
                    <div class="lg:saturate-50 hover:saturate-100 transition ease-in-out delay-150 hover:-translate-y-1 flex-wrap flex justify-center">
                        <img src={heroku} className="w-11 mb-2" alt="" />
                        <input type="range" min="0" max="100" value="60" class="range-accent" />
                    </div>
                </div>
                <div class="border border-emerald-500 rounded-md  shadow-xl lg:w-44 w-36 px-6 py-4">
                    <div class="lg:saturate-50 hover:saturate-100 transition ease-in-out delay-150 hover:-translate-y-1 flex-wrap flex justify-center">
                        <img src={firebase} className="w-14 mb-2" alt="" />
                        <input type="range" min="0" max="100" value="75" class="range-accent" />
                    </div>
                </div>
                <div class="border border-emerald-500 rounded-md  shadow-xl lg:w-44 w-36 px-6 py-4">
                    <div class="lg:saturate-50 hover:saturate-100 transition ease-in-out delay-150 hover:-translate-y-1 flex-wrap flex justify-center">
                        <img src={node} className="w-20 my-4" alt="" />
                        <input type="range" min="0" max="100" value="65" class="range-accent" />
                    </div>
                </div>
                <div class="border border-emerald-500 rounded-md  shadow-xl lg:w-44 w-36 px-6 py-4">
                    <div class="lg:saturate-50 hover:saturate-100 transition ease-in-out delay-150 hover:-translate-y-1 flex-wrap flex justify-center">
                        <img src={mongodb} className="w-14 mb-2" alt="" />
                        <input type="range" min="0" max="100" value="65" class="range-accent" />
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Skills;