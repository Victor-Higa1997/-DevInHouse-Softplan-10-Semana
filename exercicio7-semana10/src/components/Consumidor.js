import { useContext } from "react"
import { AutenticacaoContext } from './AutenticacaoContext'

export const Consumidor = () =>{

    const {autenticado, nome} = useContext(AutenticacaoContext)
    console.log(autenticado)
    if(autenticado === true){
        return <p>{`Usuário: ${nome} - Autenticado: ${autenticado}`}</p>
    }else{
        return ''
    }
}

