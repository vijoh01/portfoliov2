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


const Projects = () => {

    const languages = [
        {
            name: 'HTML',
            icon: <AiFillHtml5 />,
        },
        {
            name: 'CSS',
            icon: <TiCss3 />,
        },
        {
            name: 'JavaScript',
            icon: <SiJavascript />,
        },
        {
            name: 'JavaScript',
            icon: <SiJavascript />,
        },
        {
            name: 'JavaScript',
            icon: <SiJavascript />,
        }
    ];


    return (
        <div className="w-full bg-orange flex flex-col items-center justify-between" id="sectionC">
            <div className="flex items-center flex-col text-primary-dark max-w-[95%] sm:max-w-[70%]">
                <h2 className="text-4xl w-full">Projects</h2>
          
                <div className='flex w-full overflow-x-scroll mt-5'>
                    {languages.map((lang, index) => (
                        <div key={index} className='w-full'>
                            <p className='border w-[15rem] border-primary-dark p-1 m-1 filter flex items-center px-2 h-[20rem]'>
                                <span className="ml-2" />{lang.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Image className="pointer-events-none w-full min-w-max inset-0 -mb-5" src={white_waves} alt="Vijoh Light Logo" />
        </div>
    );
};

export default Projects;