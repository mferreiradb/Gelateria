import React from 'react';
import './style.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Avela from '../../assets/sabor-cookies-avela.png';
import Oreo from '../../assets/sabor-oreo.png';
import Limao from '../../assets/sorbet-limao.png';
import Morango from '../../assets/sorbet-morango.png';
import Pistache from '../../assets/sabor-pistache.png';
import Kiwi from '../../assets/sorbet-kiwi.png';

const Home = () => (
    <div>
        <Header />

        <section className=''>
            <h1 className='h-screen leading-normal text-white fundo-sabores flex items-center justify-center text-6xl font-bold'>Nossos Sabores</h1>
        </section>

        <main className="p-6">

            <section className="space-y-6">
                <h2 className='font-bold text-2xl mb-6'>SABORES DE SORVERTE</h2>

                <div className='h-64 shadow-special flex flex-col justify-center items-center px-10'>
                    <img src={ Oreo } alt="Oreo" className="w-40" />
                    <h3 className='font-bold text-lg mb-5 text-slate-900'>Sorvete de Oreo</h3>
                    <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                </div>

                <div className='h-64 shadow-special flex flex-col justify-center items-center px-10'>
                    <img src={ Pistache } alt="Oreo" className="w-40" />
                    <h3 className='font-bold text-lg mb-5 text-slate-900'>Sorvete de Pistache</h3>
                    <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                </div>

                <div className='h-64 shadow-special flex flex-col justify-center items-center px-10'>
                    <img src={ Avela } alt="Oreo" className="w-40" />
                    <h3 className='font-bold text-lg mb-5 text-slate-900'>Sorvete de Avelã</h3>
                    <p>O nosso melhor sorvete. Voc~e vai adorar o sabor.</p>
                </div>

                <div className='h-64 shadow-special flex flex-col justify-center items-center px-10'>
                    <img src={ Kiwi } alt="Oreo" className="w-40" />
                    <h3 className='font-bold text-lg mb-5 text-slate-900'>Sorvete de Kiwi</h3>
                    <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                </div>

                <div className='h-64 shadow-special flex flex-col justify-center items-center px-10'>
                    <img src={ Morango } alt="Oreo" className="w-40" />
                    <h3 className='font-bold text-lg mb-5 text-slate-900'>Sorvete de Morango</h3>
                    <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                </div>

                <div className='h-64 shadow-special flex flex-col justify-center items-center px-10'>
                    <img src={ Limao } alt="Oreo" className="w-40" />
                    <h3 className='font-bold text-lg mb-5 text-slate-900'>Sorvete de Limão</h3>
                    <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                </div>
            </section>
        </main>

        <Footer />
    </div>
);

export default Home;