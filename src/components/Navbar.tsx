"use client"
import React from "react";
import lightLogo from "@/imgs/vijoh-light.png"
import Image from 'next/image';
import Socials from "./buttons/Socials";
import NavItems from "./buttons/NavItems";

const Navbar = () => {
  return (
    <div className="w-full h-10 sm:h-16 bg-primary-dark flex justify-between items-center pr-20">
      <Image className="pointer-events-none sm:ml-20 mr-10 ml-10 sm:mr-24 w-16 sm:w-24" src={lightLogo} alt="Vijoh Light Logo" />
      <div className="hidden sm:flex w-fit">
      <NavItems/>
      </div>
    </div>
  );
};

export default Navbar;