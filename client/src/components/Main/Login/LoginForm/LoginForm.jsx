import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    const handleLogin = async ()=> {
      try {
        const res = await fetch(`/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
        const resData = await res.json();
        console.log(resData);
        setMessage(resData.message);
      } catch (error) {
        console.log(error)
      }
    }
    handleLogin();
  };
  console.log(errors);

  return (
    <article className='login-form-article'>
      <form className='login-form' onSubmit={handleSubmit(onSubmit)}>

      <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Required field" })}
        />
        <p className="error-message">{errors.email && errors.email.message}</p>

        <input type="password" placeholder="password" {...register("password", {required: true})} />
        <p className="error-message">
          {errors.password && errors.password.message}
        </p>

        <input type="submit" value='Log In'/>
      </form>
      {message && <div>{message}</div>}
    </article>
  );
};

export default LoginForm;
