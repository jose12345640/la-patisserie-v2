import "./login.scss"

function Login() {
    return (
        <section className="login">
            <div className="container-form">
                <p className="logo">
                    Le Patisserie
                </p>
                <form className="forms-inputs">
                    <input className="forms-inputs__input" placeholder="E-mail ou nome de usuário"/>
                    <input className="forms-inputs__input" placeholder="Palavra-passe"/>
                </form>
                <div className="links">
                    <button className="links__button" type="submit">Iniciar Sessão</button>
                    <a className="links__link-primary" href="#">Esqueci a palavra-passe</a>
                </div>
            </div>

            <div className="container-links">
                <p>Não tem uma conta <a className="container-links__link-primary" href="#">Registre-se</a>.</p>
            </div>
        </section>
    )
}

export default Login