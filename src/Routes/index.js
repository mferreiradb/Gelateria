import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Sabores from '../pages/Sabores';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='sobre' element={<Sobre />} />
            <Route path='sabores' element={<Sabores />} />
        </Routes>
    </BrowserRouter>
);

export default Rotas;