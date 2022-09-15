import React from 'react'
import './style.css'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

import Sobreimage from '../../assets/sobre-image.jpg'
import Vitrine from '../../assets/sorveteria.jpg'

export default function Sobre() {
    return (
        <div>
            <Header />
            <section>
                <h1 className='h-screen leading-normal text-white fundo-sobre flex items-center justify-center text-6xl font-bold'>Nossos Sabores</h1>
            </section>

            <section className="flex flex-col justify-center items-center md:w-full py-20 px-8">

                <div className='lg:w-3/4 xl:w-3/4 2xl:w-3/4'>
                    <h2 className='font-bold text-2xl mb-1'>Sobre Nós</h2>
                    <h3 className='font-bold text-lg mb-5 text-slate-900'>Nós simplesmente amamos sorvete!</h3>
                </div>

                <div className='space-y-4 lg:w-3/4 xl:w-3/4 2xl:w-3/4'>
                    <p>Somos uma empresa apaixonada pelo que faz.
                        Colocamos amor em cada sorvete produzido.
                        Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos
                        Operando desde 2009 para a produção final do sorvete. Vendemos tanto para varejo como para atacado.
                    </p>
                    <p>
                        Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com sua família.
                        Também vendemos para estabelecimentos e criamos eventos, como festas de aniversário, formaturas e eventos empresariais. Para contratar nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                    </p>
                </div>
            </section>

            <section className='lg:flex xl:flex 2xl:flex'>
                <img src={Sobreimage} className="md:w-screen lg:w-2/4 xl:w-2/4 2xl:w-2/4" />
                <img src={Vitrine} className="md:w-screen lg:w-2/4 xl:w-2/4 2xl:w-2/4" />
            </section>

            <Footer />
        </div>
    )
}
