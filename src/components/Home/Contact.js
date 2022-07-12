import React from 'react';

const Contact = () => {
    return (
        <div className='static'>
            <div className="flex py-5 items-center justify-center mb-6 text-teal-200 text-center">
                <div className="w-48 border-t border-gray-400 mr-4"></div>
                <h2 className="text-2xl mr-4 font-mono">What's Next?</h2>
                <div className="w-48 border-t border-gray-400"></div>
            </div>
            <div className='flex items-center justify-center lg:pb-32 pb-28' id='contact'>

                <div className="card max-w-max lg:max-w-2xl bg-base-100 shadow-xl text-teal-200 text-center">
                    <div className="card-body">
                        <h2 className="text-4xl mb-4">Get In Touch</h2>
                        <p className='mb-6'>I'm actively currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi don't hesitate, I'll try my best to get back to you!</p>
                        <form
                            action="https://formspree.io/f/xjvlzroe"
                            method="POST"
                        >
                            <div className='mb-4'>
                                <input type="text" placeholder="Your name" name="name" className="input w-full max-w-md mb-4" />

                                <textarea type="text" placeholder="Your Massage" name="message" className="textarea textarea-bordered w-full max-w-md" />
                            </div>
                            <button className='btn px-12' type="submit">Send</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;