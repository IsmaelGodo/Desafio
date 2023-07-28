import { useState } from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {

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
    <section className='login-form-section'>
      <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="email" {...register("email", {required: true})} />
        <input type="password" placeholder="password" {...register("password", {required: true})} />

        <input type="submit" />
      </form>
      {message && <div>{message}</div>}
    </section>
  );
};

export default LoginForm;
