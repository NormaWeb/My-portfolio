"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section id="home" className='lg:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-12 sm:mt-4'>
                <motion.div
                    className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300'> Hello, I'm{" "}
                        </span>
                        <br />

                        <TypeAnimation
                            sequence={[
                                'Blessing Okwong',
                                1000,
                                'a Web Developer',
                                2000,
                                'an Educationist',
                                2000,
                                'a Creative Writer',
                                2000,
                                () => {
                                    console.log('Sequence completed');
                                },
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                        />

                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        Welcome to my website! It is great connecting with you...
                    </p>
                    <div>
                    <a href="#contact"> <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-300 via-orange-900 to-orange-500 hover:bg-slate-200 text-white'> 
                            Contact me </button> 
                    </a>
                       <a href="#blog"> <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-300 via-orange-900 to-orange-500  hover:bg-slate-800 text-white border mt-3'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 '>Stay on the read </span></button> </a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-4 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src="/images/hero.PNG"
                            alt='hero image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;