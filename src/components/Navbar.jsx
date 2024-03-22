import React from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='container py-4 flex items-center justify-between font-Nova text-slate-700'>
            <div>
                {/* logo */}
                <div>
                    <img src={logo} alt='logo' className='max-w-[60px] md:max-w-[80px] max-h-[60px] md:max-h-[80px] lg:max-w-[100px] lg:max-h-[100px]' />
                </div>
            </div>
            <div>
                <ul className='flex flex-col justify-center md:flex-row md:items-center gap-2 lg:gap-8 list-none font-Nova text-md lg:text-xl'>
                    <li className='flex items-center px-2 cursor-pointer hover:text-primary transition-colors'>
                        Home
                    </li>
                    <li className='flex items-center px-2 cursor-pointer hover:text-primary transition-colors'>
                        About Us
                    </li>
                    <li className='flex items-center px-2 cursor-pointer hover:text-primary transition-colors'>
                        Post a Job
                    </li>
                    <li className='flex items-center px-2 cursor-pointer hover:text-primary transition-colors'>
                        Contact
                    </li>
                </ul>
            </div>
            <div className='flex gap-4 items-center group'>
                <button className='px-5 lg:px-10 py-1 text-md lg:text-xl  border border-slate-700 rounded-full hover:bg-primary hover:border-slate-100 hover:text-slate-100 group-hover:bg-primary group-hover:border-slate-100 group-hover:text-slate-100 transition-colors duration-200'>Sign In</button>
                <button className='px-5 lg:px-10 py-1 text-md lg:text-xl border border-slate-700 rounded-full bg-primary text-slate-100 hover:bg-transparent hover:border-slate-700 hover:text-slate-700 group-hover:bg-transparent group-hover:border-slate-700 group-hover:text-slate-700 transition-colors duration-200'>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;