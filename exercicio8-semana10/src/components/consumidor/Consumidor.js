import { useContext } from "react"
import { BackgroundContext } from "../contexts"
import { theme } from '../contexts/ThemeContext'

export const Consumidor = () => {
    const {tema, setTema} = useContext(BackgroundContext)

    return (
        <>
            <button onClick={() => setTema(theme.dark.background)}>Dark</button>
            <button onClick={() => setTema(theme.light.background)}>Light</button>

            <div style={{backgroundColor: tema, width: '200px', height: '200px'}}></div>
        </>
        
    )
}