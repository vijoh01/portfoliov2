"use client"
import React, { useState } from "react";

import { PiLinkedinLogo, PiGithubLogo, PiEnvelope } from "react-icons/pi";

const NavItems = ({dark, iconSize} : any) => {

    const [active, setActive] = useState('A');

    const handleClick = (type: any) => {
        setActive(type);
        const targetElement = document.getElementById(`section${type}`);
        if (targetElement) {
            const offset = -150;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: targetPosition + offset,
                behavior: "smooth",
            });
        }
    }
    
  return (
    <div className="flex justify-between items-center w-full max-w-[45rem] min-w-[20rem]">
        <button onClick={() => handleClick('A')} className={`${dark ? "text-primary-dark" : "text-primary-light"}`}>About</button>
        <button onClick={() => handleClick('B')} className={`${dark ? "text-primary-dark" : "text-primary-light"}`}>Knowledge</button>
        <button onClick={() => handleClick('C')} className={`${dark ? "text-primary-dark" : "text-primary-light"}`}>Projects</button>
        <button onClick={() => handleClick('D')} className={`${dark ? "text-primary-dark" : "text-primary-light"}`}>Contact</button>
    </div>
  );
};

export default NavItems;