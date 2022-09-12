import React from 'react';
import './style.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Banner from '../../assets/banner-sabores.jpg';
import Eventos from '../../assets/eventos-image.jpg';
import Sobre from '../../assets/sobre-image.jpg';

const Home = () => (
    <div>
        <Header />

        <section>
            <h1 className='text-white sm:posicionamento fundo-home bg-yellow-dev flex items-center justify-center text-6xl font-bold'>SORVETE ARTESANAL</h1>
        </section>
        
        <main className="">
            
            <section className="lg:flex xl:flex 2xl:flex">
                
                <img className="md:w-screen lg:w-2/4 xl:w-2/4 2xl:w-2/4" src={Banner} alt="banner" />

                <div className='flex flex-col justify-center items-center md:w-screen lg:w-2/4 xl:w-2/4 2xl:w-2/4 py-20 px-16'>
                    <h2 className='font-bold text-2xl mb-1'>NOSSOS SABORES</h2>
                    <h3 className='font-bold text-lg mb-5 text-slate-900'>Novos e deliciosos!</h3>
                    <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos ssão naturais, à base de frutas e sem nenhu8m conservante! Também temos opções sem lactose e sem açucar. Venha conhecer como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                </div>
            </section>

            <section className="lg:flex lg:flex-row-reverse xl:flex xl:flex-row-reverse 2xl:flex 2xl:flex-row-reverse">
                
                <img className="md:w-screen lg:w-2/4 xl:w-2/4 2xl:w-2/4" src={Eventos} alt="Eventos-foto" />

                <div className='flex flex-col justify-center items-center md:w-screen lg:w-2/4 xl:w-2/4 2xl:w-2/4 py-20 px-16'>
                    <h2 className='font-bold text-2xl mb-1'>NOSSOS EVENTOS</h2>
                    <h3 className='font-bold text-lg mb-5 text-slate-900'>Delicias com sorvete!</h3>
                    <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
                </div>
            </section>

            <section className="lg:flex xl:flex 2xl:flex">
                
                <img className="md:w-screen lg:w-2/4 xl:w-2/4 2xl:w-2/4" src={Sobre} alt="Sobre-foto" />

                <div className='flex flex-col justify-center items-center md:w-screen lg:w-2/4 xl:w-2/4 2xl:w-2/4 py-20 px-16'>
                    <h2 className='font-bold text-2xl mb-1'>SOBRE NÓS</h2>
                    <h3 className='font-bold text-lg mb-5 text-slate-900'>Alegria em cada casquinha!</h3>
                    <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade</p>
                </div>
            </section>
        </main>

        <Footer />
    </div>
);

export default Home;