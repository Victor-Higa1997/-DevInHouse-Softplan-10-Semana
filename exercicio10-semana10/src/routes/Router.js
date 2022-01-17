import { Route, Routes } from 'react-router-dom'
import { Home } from '../../src/components/Home'
import { Contatos } from '../components/Contatos'


export const Router = () => {
    return (

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contatos' element={<Contatos/>} />
            <Route path='*' element={<h1>Site não encontrado!</h1>} />
        </Routes>
    )
}
