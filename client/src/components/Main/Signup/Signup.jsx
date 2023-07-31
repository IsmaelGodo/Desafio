import SignupForm from "./SignupForm/SignupForm";
import { Link } from "react-router-dom";
import CuidaTermLogo from "../../../assets/images/cuidaterm-logo.svg";

const Signup = () => {
  return (
    <section className="login-section">
      <article className="logo-article">
        <img src={CuidaTermLogo} alt="" />
      </article>
      <SignupForm />
      <article className="">
        <Link to="/">Back to Login</Link>
      </article>
    </section>
  );
};

export default Signup;
