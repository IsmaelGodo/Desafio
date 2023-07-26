import { useForm } from "react-hook-form";

const Form2 = ({ setStep, setInfo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setStep(3);
  console.log(errors);

  return (
    <>
      <h1>Step 2</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="range"
          placeholder="Agua"
          {...register("Agua", { required: true })}
        />
        <select {...register("Actividad", { required: true })}>
          <option value="Sedentario">Sedentario</option>
          <option value="Activo">Activo</option>
          <option value="Muy activo">Muy activo</option>
          <option value="Deportista">Deportista</option>
        </select>

        <input type="submit" />
      </form>
    </>
  );
};

export default Form2;
