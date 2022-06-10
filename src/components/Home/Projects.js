import React from 'react';

const Projects = () => {
    return (
        <div>
            <div className="relative flex py-5 items-center mb-28" id='projects'>
                <h2 className="lg:text-2xl text-xl lg:mr-4 font-mono">0.3 <span className=' text-teal-200 mr-2'>Projects</span> </h2>
                <div className="lg:w-48 w-28 border-t border-gray-400"></div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 justify-items-center'>
                <div class="hero max-w-md min-h-64 rounded-xl saturate-0 hover:saturate-100 transition ease-in-out delay-150 hover:-translate-y-1" style={{ backgroundImage: `url(https://i.ibb.co/qym0YM5/Screenshot-129.png)` }}>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md text-gray-500">
                            <h1 class="mb-5 text-5xl font-bold">MotoMonster</h1>
                            <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div class="hero max-w-md min-h-64 rounded-xl saturate-0 hover:saturate-100 transition ease-in-out delay-150 hover:-translate-y-1" style={{ backgroundImage: `url(https://i.ibb.co/HX7rhjW/Screenshot-128.png)` }}>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md text-gray-600">
                            <h1 class="mb-5 text-5xl font-bold">Jersea-Inv-Man</h1>
                            <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div class="hero max-w-md min-h-64 lg:col-span-2 rounded-xl saturate-0 hover:saturate-100 transition ease-in-out delay-150 hover:-translate-y-1" style={{ backgroundImage: `url(https://i.ibb.co/KVBVX5c/Screenshot-130.png)` }}>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md  hover:text-transparent ">
                            <h1 class="mb-5 text-5xl font-bold">Nabil Production</h1>
                            <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;