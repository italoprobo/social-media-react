import { Link } from "react-router-dom"
import "./login.scss"

const Login = () => {
    return(
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Like Dislike.</h1>
                    <p>Bem vindo a melhor rede social do planeta terra nunca já vista em todo universo visivel.</p>
                    <span>Não tem uma conta?</span>
                    <Link to="/registrar">
                    <button>Registre-se</button>
                    </Link>
                </div>
                <div className="rigth">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Senha" />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login