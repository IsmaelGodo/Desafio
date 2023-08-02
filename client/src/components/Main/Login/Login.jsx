import LoginForm from "./LoginForm/LoginForm";
import { Link } from 'react-router-dom';
import CuidaTermLogo from '../../../assets/images/cuidaterm-logo.svg'

const Login = () => {

  return (
    <section className="login-section">
    <article className="logo-article">
      <img src={CuidaTermLogo} alt="" />
    </article>
      <LoginForm />
      <article className="signup-link-article">
        <Link className="signup-link" to='/signup' >Regístrate</Link>
      </article>
    </section>
  );
};

export default Login;
