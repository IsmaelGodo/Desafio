import SignupForm from "./SignupForm/SignupForm";
import { Link } from "react-router-dom";
import CuidaTermLogo from "../../../assets/images/cuidaterm-logo.svg";

const Signup = () => {
  //Login
  return (
    <section className="login-section">
      <article className="logo-article">
        <img src={CuidaTermLogo} alt="" />
      </article>
      <SignupForm />
      <article className="signup-link-article">
        <Link className="signup-link" to="/">Atrás</Link>
      </article>
    </section>
  );
};

export default Signup;
