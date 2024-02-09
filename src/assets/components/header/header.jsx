import {NavMenuLeft} from '../../data/nav-menu-left'
import {NavMenuRight} from '../../data/nav-menu-right'

import { RiNotificationLine } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import { PiBagSimple } from "react-icons/pi";
import { HiMenuAlt4 } from "react-icons/hi";


import Logo from '../../images/svg/logo.jsx'
import { useState } from 'react';


export default function Header() {
    
    return (
        <div className="z-10 top-0 fixed w-full">
            <div  className="h-[61px] bg-transparent border-gray-50 border-opacity-30 border-b  max-w-[calc(100%-60px)] mx-auto flex items-center justify-between">
                <div>
                    <ul className='flex items-center gap-5'>
                        {NavMenuLeft.map((item, index) => (
                            <li className='mobile:hidden' key={index}>
                                <a className='text-sm text-white hover:text-opacity-70' href="#">{item.name}</a>
                            </li>
                        ))}
                        <div className='flex items-center gap-4'>
                            <HiMenuAlt4 className='text-white text-lg hidden mobile:visible' />
                            <RiNotificationLine className='hover:text-opacity-70 cursor-pointer text-white text-lg' />
                        </div>
                    </ul>
                </div>
                <div className=''>
                    <Logo/>
                </div>
                <div>
                    <ul className='flex items-center gap-5'>
                        {NavMenuRight.map((item, index) => (
                            <li className='mobile:hidden' key={index}>
                                <a className='hover:text-opacity-70 text-sm text-white' href="#">{item.name}</a>
                            </li>
                        ))}  
                        <div className='flex items-center gap-4'>
                            <LuSearch className='hover:text-opacity-70 cursor-pointer text-white text-lg' />
                            <PiBagSimple className='hover:text-opacity-70 cursor-pointer text-white text-lg' />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}