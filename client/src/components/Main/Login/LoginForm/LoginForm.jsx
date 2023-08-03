import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserLoggedContext } from "../../../../context/userLoggedContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const passRe = /^[\w\-.@]{8,16}$/;
  const { updateUserLogged } = useContext(UserLoggedContext);
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
        const response = await axios.post("/auth/login", data);
        const resData = await response.data;

        if (resData.successful) {
          try {
            const response = await axios.get(
              `/api/dataform?user_id=${resData.user_id}`
            );
            const data = await response.data;
            updateUserLogged();
            setTimeout(() => {
              if (data.length > 0) {
                navigate("/perfil");
              } else {
                navigate("/form");
              }
            }, 500);
          } catch (error) {
            console.log("Error al enviar los datos:", error);
          }
        } else {
          setMessage(resData.message);
        }
      } catch (error) {
        console.log(error);
        setMessage(error);
      }
    };

    handleLogin();
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
          {...register("password", {
            required: "Required field",
            minLength: {
              value: 8,
              message:
                "Password should have between 6-12 alphanumeric characters or: / . - _",
            },
            maxLength: {
              value: 16,
              message:
                "Password should have between 6-12 alphanumeric characters or: / . - _",
            },
            pattern: {
              value: passRe,
              message:
                "Password should have between 6-12 alphanumeric characters or: / . - _",
            },
          })}
          // onChange={handlePasswordChange}
        />
        <p className="error-message">
          {errors.password && errors.password.message}
        </p>
        {}
        <input type="submit" value="Acceso" className="actived-button" />
      </form>
      <div className="login-message">{message && <p>{message}</p>}</div>
    </article>
  );
};

export default LoginForm;
