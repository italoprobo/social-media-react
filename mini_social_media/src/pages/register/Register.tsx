import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Like Dislike.</h1>
          <p>Bem vindo a melhor rede social do planeta terra nunca já vista em todo universo visivel.</p>
          <span>Você tem uma conta?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Registrar</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <input type="text" placeholder="Nome" />
            <button>Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;