import LoginForm from "./LoginForm/LoginForm";
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <section className="login-section">
      <LoginForm />
      <article className="">
        <Link to='/signup' >Click here to register</Link>
      </article>
    </section>
  );
};

export default Login;
