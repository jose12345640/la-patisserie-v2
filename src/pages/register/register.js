import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./register.scss";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    const handleRegister = async (event) => {
        event.preventDefault();

        const userData = {
            username,
            password,
            email,
            role: "USER",
        };

        try {
            const response = await fetch("http://localhost:8080/authorization-service/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error("Falha ao registrar o usuário.");
            }

            alert("Usuário registrado com sucesso!");

            setTimeout(() => {
                navigate("/login");
            }, 1000);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <section className="register">
            <div className="container-form">
                <p className="logo">Le Patisserie</p>
                <form className="forms-inputs" onSubmit={handleRegister}>
                    <input
                        className="forms-inputs__input"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="forms-inputs__input"
                        type="password"
                        placeholder="Palavra-passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        className="forms-inputs__input"
                        placeholder="Nome de usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button className="links__button" type="submit">
                        Registrar
                    </button>
                </form>
                {error && <p className="error-message">{error}</p>}
                <div className="links">
                    <p>
                        Ao se registrar, você concorda com nossos{" "}
                        <a className="links__link-primary" href="" download="Termos.pdf">
                            Termos
                        </a>{" "}
                        e nossa{" "}
                        <a
                            className="links__link-primary"
                            href=""
                            download="Política de Privacidade e Cookies.pdf"
                        >
                            Política de Privacidade e Cookies
                        </a>
                        .
                    </p>
                </div>
            </div>
            <div className="container-links">
                <p>
                    Já tem uma conta?{" "}
                    <a className="container-links__link-primary" href="/login">
                        Inicie sessão
                    </a>
                </p>
            </div>
        </section>
    );
}

export default Register;
