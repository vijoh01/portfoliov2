"use client"
import React from "react";
import lightLogo from "@/imgs/vijoh-light.png"
import Image from 'next/image';

import white_waves from "@/imgs/white_waves.svg"

import { DiJava, DiMysql, DiJqueryLogo, DiReact } from 'react-icons/di'
import { AiFillHtml5, AiFillGithub, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BsFillHddNetworkFill } from 'react-icons/bs'
import { TiCss3 } from 'react-icons/ti'

import { SiTypescript, SiJavascript, SiMaterialdesignicons, SiExpress } from 'react-icons/si'

import weather from '@/imgs/weather.png'
import msg from '@/imgs/msgboard.png'
import tamagotchi from '@/imgs/tamagotchi.png'


const Projects = () => {

    const projects = [
        {
            name: 'MsgBoard',
            description: 'Social media app, register and post messages that can be seen by anyone.',
            file: msg,
            link: 'https://vijoh01.github.io/fe22-vh-slutprojekt-grupp-6/'
        },
        {
            name: 'Tamagotchi',
            description: 'Create multiple tamagotchis and take care of them.',
            file: tamagotchi,
            link: 'https://vijoh01.github.io/FE22-js2-mp2-Viktor-Johansson/'
        },
        {
            name: 'Weather',
            description: 'School group project using weather api that allows you to see the weather anywhere.',
            file: weather,
            link: 'https://ignacio-ci.github.io/fe22-vh-projekt1-grupp-5/'
        },
    ];


    return (
        <div className="w-full bg-orange flex flex-col items-center justify-between pt-16" id="projects">
            <div className="flex items-center flex-col text-primary-dark max-w-[100%] sm:max-w-[70%] pb-20 md:pb-10">
                <h2 className="text-4xl w-full text-center">Projects</h2>

                <div className='flex w-full overflow-x-auto scroll-py-20 mt-10'>
                    {projects.map((project, index) => (
                        <div key={index} className='relative h-[25rem] px-1'>
                            <Image className="h-full object-cover w-[16rem] md:w-[25rem] " src={project.file} alt=""></Image>
                            <div className="w-[16rem] md:w-[25rem] "></div>
                            <div className='absolute top-0 left-0 flex flex-col items-center justify-end h-full w-full '>
                                <div className="h-[50%] bg-[#ffffffc5] flex flex-col justify-between items-center w-[16rem] md:w-[25rem] px-2 py-5">
                                    <h1 className="font-bold">{project.name}</h1>
                                    <p className="text-center w-full">{project.description}</p>
                                    <a href={project.link} className="mt-5 px-10 py-2 bg-primary-dark text-primary-light cursor-pointer">Visit</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Image className={"pointer-events-none w-full min-w-max scale-110 sm:scale-100"} loading="lazy" src={white_waves} alt="" />

        </div>
    );
};

export default Projects;