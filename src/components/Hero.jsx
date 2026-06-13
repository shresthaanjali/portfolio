import React from 'react';
import {PROFILE_IMAGE} from '../data';

const Hero = () => {
    return (
        <section id="about"
            className="relative bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-16 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="text-center lg:text-left z-10 order-2 lg:order-1">
                                <span
                                    className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-600 text-xs sm:text-sm font-semibold mb-4">
                                    Software Engineer
                                </span>
                        <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Crafting Scalable <br/>
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">Web Solutions</span>
                        </h1>
                        <p className="text-base lg:text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Hi, I'm Anjali. A software developer with 3 years of experience crafting scalable backend systems and responsive frontend interfaces using Laravel, React.js, and modern web technologies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#projects"
                               className="bg-primary-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-700 transition shadow-lg hover:shadow-primary-500/30 text-center">
                                View Portfolio
                            </a>
                            <a href="#contact"
                               className="border-2 border-gray-300 text-gray-700 px-8 py-3.5 rounded-full font-semibold hover:border-gray-900 hover:text-gray-900 transition text-center">
                                Contact Me
                            </a>
                        </div>
                    </div>

                    <div className="relative flex justify-center order-1 lg:order-2">
                        <div
                            className="absolute w-48 h-48 sm:w-72 sm:h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
                        <div
                            className="absolute w-48 h-48 sm:w-72 sm:h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob top-10 right-10"
                            style={{animationDelay: '2s'}}></div>
                        <div className="relative w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96">
                            {/* Readjusted image: object-cover with custom vertical position (20% from top) */}
                            <img src={PROFILE_IMAGE} alt="Anjali Portrait"
                                 className="rounded-full object-cover w-full h-full border-4 border-white shadow-2xl relative z-10 bg-white object-[center_20%]"/>
                            <div
                                className="absolute bottom-4 left-0 bg-white p-4 rounded-xl shadow-lg z-20 hidden sm:flex items-center gap-3 animate-bounce"
                                style={{animationDuration: '3s'}}>
                                <div className="bg-green-100 p-2 rounded-full text-green-600">
                                    <i className="fas fa-check"></i>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Experience</p>
                                    <p className="font-bold text-gray-900">3+ Years</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;