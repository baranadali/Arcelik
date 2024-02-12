import {NavMenuLeft} from '../../data/nav-menu-left'
import {NavMenuRight} from '../../data/nav-menu-right'

import { RiNotificationLine } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import { PiBagSimple } from "react-icons/pi";
import { HiMenuAlt4 } from "react-icons/hi";


import Logo from '../../images/svg/logo.jsx'
import { useState } from 'react';


export default function Header() {


    // Scroll animated header
    const [header, setHeader] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 70) {
            setHeader(true)
        } else { setHeader(false) }
    }

    window.addEventListener('scroll', changeBackground)
    
    return (
        // className="z-10 top-0 fixed w-full"
        <div className={header ? 'z-30 top-0 fixed w-full bg-white' : 'z-30 top-0 fixed w-full bg-transparent'}>
            <div  className="h-[61px] bg-transparent border-gray-50 border-opacity-30 border-b  max-w-[calc(100%-60px)] mx-auto flex items-center justify-between">
                <div>
                    <ul className='flex items-center gap-5'>
                        {NavMenuLeft.map((item, index) => (
                            <li className='mobile:hidden' key={index}>
                                <a className={header ? 'text-black text-sm hover:text-opacity-70' : 'text-white text-sm hover:text-opacity-70'} href="#">{item.name}</a>
                            </li>
                        ))}
                        <div className='flex items-center gap-4'>
                            <HiMenuAlt4 className={header ? 'text-black text-xl hidden mobile:block' : 'text-white text-xl hidden mobile:block'}/>
                            <RiNotificationLine className={header ? 'text-black text-lg cursor-pointer hover:text-opacity-70' : 'text-white text-lg cursor-pointer hover:text-opacity-70'} />
                        </div>
                    </ul>
                </div>
                <div className=''>
                    <Logo color={header ? 'black' : 'white'}/>
                </div>
                <div>
                    <ul className='flex items-center gap-5'>
                        {NavMenuRight.map((item, index) => (
                            <li className='mobile:hidden' key={index}>
                                <a className={header ? 'text-black text-sm hover:text-opacity-70' : 'text-white text-sm hover:text-opacity-70'} href="#">{item.name}</a>
                            </li>
                        ))}  
                        <div className='flex items-center gap-4'>
                            <LuSearch className={header ? 'text-black text-lg cursor-pointer hover:text-opacity-70' : 'text-white text-lg cursor-pointer hover:text-opacity-70'} />
                            <PiBagSimple className={header ? 'text-black text-lg cursor-pointer hover:text-opacity-70' : 'text-white text-lg cursor-pointer hover:text-opacity-70'} />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}