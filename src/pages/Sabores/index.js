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

        <main className="lg:my-20 xl:my-20 2lg:my-20 p-6">

            <h2 className='font-bold text-2xl mb-6'>SABORES DE SORVERTE</h2>
            <section className="space-y-7 md:flex md:flex-col md:items-center">

                <div className="space-y-6 flex flex-col justify-center items-center px-10 lg:flex-row lg:space-x-12 lg:space-y-0 xl:flex-row xl:space-x-12 xl:space-y-0 2xl:flex-row 2xl:space-x-12 2xl:space-y-0">

                    <div className='md:w-3/4 h-64 shadow-special flex flex-col justify-center items-center px-10 lg:h-96 xl:h-96 2xl:h-96 lg:w-60'>
                        <img src={Oreo} alt="Oreo" className="w-40" />
                        <h3 className='font-bold text-lg mb-5 text-slate-900'>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>

                    <div className='md:w-3/4 h-64 shadow-special flex flex-col justify-center items-center px-10 lg:h-96 xl:h-96 2xl:h-96 lg:w-60'>
                        <img src={Pistache} alt="Oreo" className="w-40" />
                        <h3 className='font-bold text-lg mb-5 text-slate-900'>Sorvete de Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>

                    <div className='md:w-3/4 h-64 shadow-special flex flex-col justify-center items-center px-10 lg:h-96 xl:h-96 2xl:h-96 lg:w-60'>
                        <img src={Avela} alt="Oreo" className="w-40" />
                        <h3 className='font-bold text-lg mb-5 text-slate-900'>Sorvete de Avelã</h3>
                        <p>O nosso melhor sorvete. Voc~e vai adorar o sabor.</p>
                    </div>

                </div>

                <div className="space-y-6 flex flex-col justify-center items-center px-10 lg:flex-row lg:space-x-12 lg:space-y-0 xl:flex-row xl:space-x-12 xl:space-y-0 2xl:flex-row 2xl:space-x-12 2xl:space-y-0">

                    <div className='md:w-3/4 h-64 shadow-special flex flex-col justify-center items-center px-10 lg:h-96 xl:h-96 2xl:h-96 lg:w-60'>
                        <img src={Kiwi} alt="Oreo" className="w-40" />
                        <h3 className='font-bold text-lg mb-5 text-slate-900'>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>

                    <div className='md:w-3/4 h-64 shadow-special flex flex-col justify-center items-center px-10 lg:h-96 xl:h-96 2xl:h-96 lg:w-60'>
                        <img src={Morango} alt="Oreo" className="w-40" />
                        <h3 className='font-bold text-lg mb-5 text-slate-900'>Sorvete de Morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>

                    <div className='md:w-3/4 h-64 shadow-special flex flex-col justify-center items-center px-10 lg:h-96 xl:h-96 2xl:h-96 lg:w-60'>
                        <img src={Limao} alt="Oreo" className="w-40" />
                        <h3 className='font-bold text-lg mb-5 text-slate-900'>Sorvete de Limão</h3>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>

                </div>
            </section>
        </main>

        <Footer />
    </div>
);

export default Home;