import { useEffect, useState } from "react";
import Form1 from "./Form1/Form1";
import Form2 from "./Form2/Form2";
import Form3 from "./Form3/Form3";
import Resultado from "./Resultado/Resultado";

const Questionnaire = () => {
  const [step, setStep] = useState(1);

  const [stepForm, setStepForm] = useState(null);

  const [info, setInfo] = useState(null);

  useEffect(() => {
    switch (step) {
      case 1:
        setStepForm(<Form1 setStep={setStep} setInfo={setInfo} />);
        break;
      case 2:
        setStepForm(<Form2 setStep={setStep} setInfo={setInfo} />);
        break;
      case 3:
        setStepForm(<Form3 setStep={setStep} setInfo={setInfo} />);
        break;
      case 4:
        setStepForm(<Resultado setStep={setStep} setInfo={setInfo} />);
        break;
    }
  }, [step]);

  return <>{stepForm}</>;
};

export default Questionnaire;
