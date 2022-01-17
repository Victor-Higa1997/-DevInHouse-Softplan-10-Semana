import { useContext } from "react"
import { AutenticacaoContext } from './AutenticacaoContext'



export const Consumidor2 = () => {
    const { autenticado, setAutenticado } = useContext(AutenticacaoContext)
    console.log(autenticado)
    return <button onClick={ () => autenticado? (setAutenticado(false)) 
        : (setAutenticado(true))}>{ autenticado? ('Logout'): ('Login') }</button>

}