"use client"
import React, { useEffect, useState } from "react";

import { PiUser, PiRocketLaunch, PiProjectorScreenChart, PiPaperPlane } from "react-icons/pi";

const MobileNav = () => {
    const [active, setActive] = useState(null);

    const handleClick = (type: any) => {
        setActive(type);
        const targetElement = document.getElementById(`section${type}`);
        if (targetElement) {
            const offset = -20;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: targetPosition + offset,
                behavior: "smooth",
            });
        }
    }


    return (
        <div className="w-full h-12 bg-primary-light filter bg-opacity-70 dark:bg-primary-dark flex justify-evenly items-center fixed bottom-0 sm:hidden">
            <button onClick={() => handleClick('A')} className="text-primary-dark dark:text-primary-light"><PiUser className={active === 'A' ? `fill-[black] dark:fill-[white]` : `fill-[#00000073] dark:fill-[#ffffff73]`} size={35} /></button>
            <button onClick={() => handleClick('B')} className="text-primary-dark dark:text-primary-light"><PiRocketLaunch className={active === 'B' ? `fill-[black] dark:fill-[white]` : `fill-[#00000073] dark:fill-[#ffffff73]`} size={35} /></button>
            <button onClick={() => handleClick('C')} className="text-primary-dark dark:text-primary-light"><PiProjectorScreenChart className={active === 'C' ? `fill-[black] dark:fill-[white]` : `fill-[#00000073] dark:fill-[#ffffff73]`} size={35} /></button>
            <button onClick={() => handleClick('D')} className="text-primary-dark dark:text-primary-light"><PiPaperPlane className={active === 'D' ? `fill-[black] dark:fill-[white]` : `fill-[#00000073] dark:fill-[#ffffff73]`} size={35} /></button>
        </div>
    );
};

export default MobileNav;