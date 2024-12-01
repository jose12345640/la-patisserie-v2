import "./register.scss"

function Register() {
    return (
        <section className="register">
            <div className="container-form">
                <p className="logo">
                    Le Patisserie
                </p>
                <form className="forms-inputs">
                    <input className="forms-inputs__input" placeholder="E-mail "/>
                    <input className="forms-inputs__input" placeholder="Palavra-passe"/>
                    <input className="forms-inputs__input" placeholder="Nome completo"/>
                    <input className="forms-inputs__input" placeholder="Nome de usuário"/>
                </form>
                <div className="links">
                    <p>Com este registo, aceitas os nossos <a className="links__link-primary" href="#">Termos</a>, a
                         <a className="links__link-primary" href="#">Política de Privacidade e a Política de Cookies</a>.
                    </p>
                    <button className="links__button" type="submit">Registrar</button>
                </div>
            </div>

            <div className="container-links">
                <p>Já tem uma conta? <a className="container-links__link-primary" href="#">Inicie sessão</a>.</p>
            </div>
        </section>
    )
}

export default Register