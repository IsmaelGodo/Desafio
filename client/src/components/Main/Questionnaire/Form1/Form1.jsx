import { useForm } from 'react-hook-form';

const Form1 = ({setStep, setInfo}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => setStep(2);
  console.log(errors);
  
  return (
    <>
    <h1>Step</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="number" placeholder="Edad" {...register("Edad", {required: true, max: 120})} />
      <input type="text" placeholder="Peso" {...register("Peso", {required: true, max: 250})} />
      <input type="number" placeholder="Altura" {...register("Altura", {required: true, max: 250, min: 14})} />

      <input type="submit" />
    </form>
    </>
  );
};

export default Form1;
