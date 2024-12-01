import "./login.scss"
import Search from "../../components/search/search";

function Login() {
    return (
        <section className="login">
            <div className="container-form">
                <p className="logo">
                    Le Patisserie
                </p>
                <div className="forms-inputs">
                    <Search/>
                    <Search/>
                </div>
                <div className="links">
                    <button>Iniciar Sessão</button>
                    <a href="#">Esqueci a palavra-passe</a>
                </div>
            </div>

            <div className="container-links">
                <p>Não tem uma conta <a href="#">Registre-se</a>.</p>
            </div>
        </section>
    )
}

export default Login