import { Link } from "react-router-dom"

const ErrorComponent = () => {
    return (
        <main className="mainErrorPage">
            <h1 className="mainErrorPage--number">404</h1>
            <p className="mainErrorPage--description"></p>
            <Link className="mainErrorPage--redirection" to='/'>Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default ErrorComponent