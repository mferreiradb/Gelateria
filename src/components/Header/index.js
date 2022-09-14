import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

export default function Header() {

    return (
    <header className='fixed z-1 w-screen bg-yellow-dev flex flex-col items-center md:flex-row md:space-x-80 lg:justify-center xl:justify-center 2xl:justify-center'>
        
            <img className='w-12  md:relative md:right-0 md:left-16' src={Logo} alt='logo' />
            
            <nav className='flex justify-center w-full space-x-3 border-t-2 border-slate-600 p-3 md:w-auto md:border-t-yellow-dev md:relative md:right-0 md:left-16'>

                <Link className='px-5 font-bold text-lg rounded-lg lg:hover:bg-yellow-500 xl:hover:bg-yellow-500 2xl:hover:bg-yellow-500' to='/'>Home</Link>

                <Link className='px-5 font-bold text-lg rounded-lg lg:hover:bg-yellow-500 xl:hover:bg-yellow-500 2xl:hover:bg-yellow-500' to='/sabores'>Sabores</Link>

                <Link className='px-5 font-bold text-lg rounded-lg lg:hover:bg-yellow-500 xl:hover:bg-yellow-500 2xl:hover:bg-yellow-500' to='/sobre'>Sobre</Link>
            </nav>
    </header>
    )
}
