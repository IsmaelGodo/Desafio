import SignupForm from "./SignupForm/SignupForm";
import { Link } from 'react-router-dom';

const Signup = () => {
  
  return (
    <section className="login-section">
      <SignupForm />
      <article className="">
        <Link to='/login' >Back to Login</Link>
      </article>
    </section>
  );
};

export default Signup;
