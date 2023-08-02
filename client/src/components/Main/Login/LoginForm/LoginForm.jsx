import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserLoggedContext } from "../../../../context/userLoggedContext";

const LoginForm = () => {

  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  // const [emailState, setEmailState] = useState("");
  // const [passwordState, setpasswordState] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const handleLogin = async () => {
      try {
        const res = await fetch(`/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const resData = await res.json();
        console.log(resData);
        setMessage(resData.message);

          
      } catch (error) {
        console.log(error);
        setMessage(error);
      }
    };
    handleLogin();

    setTimeout(() => {
      navigate('/form');
    }, 500);
  };
  // console.log(errors);

  // const handleEmailChange = () => {
  //   setEmailState("active");
  // };
  // const handlePasswordChange = () => {
  //   setpasswordState("active");
  // };

  return (
    <article className="login-form-article">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Correo electrónico"
          {...register("email", { required: "Required field" })}
          // onChange={handleEmailChange}
        />
        <p className="error-message">{errors.email && errors.email.message}</p>

        <input
          type="password"
          placeholder="Contraseña"
          {...register("password", { required: true })}
          // onChange={handlePasswordChange}
        />
        <p className="error-message">
          {errors.password && errors.password.message}
        </p>
        {}
        <input type="submit" value="Acceso" className="actived-button"/>
      </form>
      {message && <div>{message}</div>}
    </article>
  );
};

export default LoginForm;
