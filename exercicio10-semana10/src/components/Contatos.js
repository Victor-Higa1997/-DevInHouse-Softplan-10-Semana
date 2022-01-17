import { Link } from "react-router-dom"

export const Contatos = () => {
    return (

        <>
            <h1>Contato</h1>
            <p>Nome: Victor Higa<br />
                Cel: (11)99999-9999<br />
                e-mail: victor@gmail.com
            </p>
            <Link to="/" >Home</Link>
        </>
    )
}