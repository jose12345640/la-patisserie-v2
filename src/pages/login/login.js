import React, { useState } from "react";
import axios from "axios";
import "./login.scss"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/authorization-service/auth/token", {
        username,
        password,
      });

      
      const { token } = response.data;
      console.log("Token recebido:", token);

      localStorage.setItem("authToken", token);

      alert("Login bem-sucedido!");
    } catch (err) {
      console.error("Erro ao fazer login:", err);
      setError("Credenciais inválidas ou erro no servidor");
    }
  };

  return (
    <section className="login">
      <div className="container-form">
        <p className="logo">Le Patisserie</p>
        <form className="forms-inputs" onSubmit={handleSubmit}>
          <div className="forms-inputs__data">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="E-mail ou nome de usuário"
              required
            />
          </div>
          <div className="forms-inputs__data">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Palavra-passe"
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="links">
            <button className="links__button" type="submit">Iniciar Sessão</button>
          </div>
        </form>
      </div>
      <div className="container-links">
        <p>
          Não tem uma conta? <a className="container-links__link-primary" href="/cadastro">Registre-se</a>
        </p>
      </div>
    </section>
  );
}

export default Login;
