import { useForm } from 'react-hook-form';

const Form3 = ({setStep, setInfo}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => setStep(4);
  console.log(errors);
  
  return (
    <>
      <h1>Step 3</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Enfermedad cardiovascular</label>
        <br />
        <label htmlFor="">Si<input {...register("Enfermedad cardiovascular", { required: true })} type="radio" value="Si" /></label>
        <label htmlFor="">No<input {...register("Enfermedad cardiovascular", { required: true })} type="radio" value="No" /></label>
        
        <br />
        <label htmlFor="">Tensión</label>
        <br />
        <input {...register("Tensión", { required: true })} type="radio" value="Alta" />
        <input {...register("Tensión", { required: true })} type="radio" value="Media" />
        <input {...register("Tensión", { required: true })} type="radio" value="Baja" />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default Form3;
