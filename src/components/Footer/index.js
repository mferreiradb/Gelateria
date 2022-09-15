import React from "react";

import Logo from '../../assets/logo.png'

const Footer = () => (
    <footer className='space-y-5 pt-16 pb-5 bg-black flex flex-col items-center'>

        <img className='w-28 lg:w-40 lg:relative lg:left-4 xl:w-40 xl:relative xl:left-4 2xl:w-40 2xl:relative 2xl:left-4' src={Logo} alt='logo' />

        <div className="space-y-5 xl:flex xl:space-y-0 xl:space-x-5 2xl:flex 2xl:space-y-0 2xl:space-x-5 lg:flex lg:space-y-0 lg:space-x-5">
            <div>
                <h2 className='text-white font-bold text-xl mb-2'>ENDEREÇO</h2>
                <p className='text-white'>Av. Bernardino de Campos, 98</p>
                <p className='text-white'>São Paulo, SP 12345-678</p>
            </div>
            <div>
                <h2 className='text-white font-bold text-xl mb-2'>CONTATO</h2>
                <p className='text-white'>info@meusite.com</p>
                <p className='text-white'>Tel: (11) 3456-7890</p>
            </div>
            <div>
                <h2 className='text-white font-bold text-xl mb-2'>HORÁRIOS</h2>
                <p className='text-white'>ABERTO TODOS OS DIAS</p>
                <p className='text-white'>10:00 - 22:00</p>
            </div>
        </div>

        <div className='pt-16'>
            <p className='text-white'>Gelateria. Orgulhosamente desenvolvido por</p>
            <p className='text-white'>Mauricio Ferreira</p>
        </div>

    </footer>
)
export default Footer;
