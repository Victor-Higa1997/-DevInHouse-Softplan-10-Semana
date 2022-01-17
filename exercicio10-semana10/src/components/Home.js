import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <h1>Bem vindo</h1>
            <footer>
                <Link to="/contatos" >Contatos</Link>
            </footer>
        </>
    )
}