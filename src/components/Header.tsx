"use client"
import React from "react";
import lightLogo from "@/imgs/vijoh-light.png"
import Image from 'next/image';
import me from '@/imgs/me.svg'
import NavItems from "./buttons/NavItems";
import blue_waves_top from "@/imgs/blue_waves_top.svg"
import { PiArrowSquareOutThin } from "react-icons/pi";

const Header = () => {
  return (
    <div className="w-full bg-primary-light dark:bg-primary-dark flex flex-col items-center justify-between">
        <div className="flex items-center md:justify-evenly flex-col md:flex-row w-full mt-5 sm:mt-12 pb-5">
      <Image className="pointer-events-none w-[200px] sm:w-[300px]" src={me} alt="Vijoh Light Logo" />
      <div className="mt-10 md:mt-0 max-w-[17rem] sm:max-w-[27rem] ">
        <h1 className="w-full  text-3xl sm:text-5xl text-primary-dark dark:text-primary-light">Code and Design, I Make Ideas Real.</h1>
        <p className="mt-5 mb-5 text-primary-dark dark:text-primary-light">Discover my expertise in React.js and web development through my latest projects.</p>
        <div className="flex items-center">
        <button className="flex justify-between items-center bg-primary-dark text-primary-light dark:bg-primary-light dark:text-primary-dark py-2 px-5 rounded-md btn-text font-bold">Resume<PiArrowSquareOutThin className="ml-2 fill-primary-light size-4 dark:fill-primary-dark"/></button>
        <a href="" className="text-primary-dark dark:text-primary-light underline ml-10">Contact</a>
        </div>
        
      </div>
      </div>
      <Image className="pointer-events-none w-full min-w-max inset-0 scale-150 sm:scale-125 md:scale-110" src={blue_waves_top} alt="Vijoh Light Logo" />
    </div>
  );
};

export default Header;