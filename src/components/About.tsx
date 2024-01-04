"use client"
import React from "react";
import lightLogo from "@/imgs/vijoh-light.png"
import Image from 'next/image';
import me from '@/imgs/me.svg'
import NavItems from "./buttons/NavItems";
import blue_waves_bottom from "@/imgs/blue_waves_bottom.svg"
import { PiLayout } from "react-icons/pi";

const About = () => {
    return (
        <div className="w-full bg-blue-100 flex flex-col items-center justify-between pt-20 md:pt-10" id="sectionA">
            <div className="flex flex-col md:flex-row md:justify-evenly items-center w-full pb-20 md:pb-10">
                <div className="flex flex-col max-w-[17rem] sm:max-w-[27rem]">
                    <h2 className="text-4xl text-primary-dark">Innovative Solutions</h2>
                    <p className="mt-4 text-primary-dark text-lg">I have dedicated myself to web development with a
                        passion for programming and several years of experience
                        in the field. My creativity and analytical thinking have been
                        crucial in creating innovative solutions. I thrive in team
                        environments and always have an eye for detail.</p>
                </div>
                <PiLayout size={200} className={"hidden md:flex fill-primary-dark"} />
            </div>
            <Image className="pointer-events-none w-full min-w-max inset-0 scale-150 sm:scale-125 md:scale-110" src={blue_waves_bottom} alt="Vijoh Light Logo" />


        </div>
    );
};

export default About;