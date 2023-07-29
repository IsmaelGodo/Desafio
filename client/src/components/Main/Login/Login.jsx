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
      <article className="">
        <Link to='/signup' >Click here to register</Link>
      </article>
    </section>
  );
};

export default Login;
