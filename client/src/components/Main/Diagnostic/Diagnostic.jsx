import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CuidatermIcon from "../../../assets/icons/Cuidaterm-Icon.svg";
import NavBar from "../Home/NavBar/NavBar";
import Cookies from "js-cookie";
import axios from "axios";

const Diagnostic = () => {
  
 
  //   return mensaje
  const [userData, setUserData] = useState({});
  const [diagData, setDiagData] = useState([{ weight: 70, height: 175 ,activity:'Solo salgo a pasear' }])
  const [imcResultado, setImcResultado] = useState(0)
  const [categoria, setCategoria] = useState('')
  const [message, setMessage] = useState('')
  const [messageAgua, setMessageAgua] = useState('')
  const [messageActiv, setMessageActiv] = useState('')
  const [messageDissN, setMessageDissN] = useState('')
  const [messageDissC, setMessageDissC] = useState('')
  const [messageDissP, setMessageDissP] = useState('')
  const [messageDissD, setMessageDissD] = useState('')





  useEffect(() => {
    const user_id = Cookies.get("user-logged");

    const getUserData = async () => {
      try {
        const response = await axios.get(
          `/api/users?user_id=${parseInt(user_id)}`
        );
        const user = await response.data;
        console.log(user[0]);
        setUserData(user[0]);
        try {
          const response = await axios.get(
            `/api/dataform?user_id=${parseInt(
              user[0].user_id
            )}`
          );
          const data = await response.data;
          const newDignostic = data.map((diag, index) => ({
            key: index,
            user_id: diag.user_id,
            age: diag.age,
            sex: diag.sex,
            height: diag.height,
            weight: diag.weight,
            water_gl: diag.water_gl,
            activity: diag.activity,
            cardio_dis: diag.cardio_dis,
            digest_dis: diag.digest_dis,
            neuro_dis: diag.neuro_dis,
            lung_dis: diag.lung_dis,
          }));
          setDiagData(newDignostic);
        } catch (error) {
          console.log("Error:", error);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
    
  }, []);

  
  useEffect(() => {
    setImcResultado((diagData[0].weight / ((diagData[0].height / 100) * (diagData[0].height / 100))).toFixed(2));
    //console.log(imcResultado)
    let categoria = '';
    if (imcResultado < 18.5) {
      categoria = 'Bajo';
      setMessage('Las personas con tu IMC pueden tener menos reservas de agua en el cuerpo debido a una menor cantidad de masa corporal. Esto podría hacer que sean más susceptibles a la deshidratación durante períodos de altas temperaturas y sudoración.')
    } else if (imcResultado < 25) {
      categoria = 'saludable';
      setMessage('Un IMC saludable no significa que estés exento(a) de deshidratación, y el calor puede aumentar la pérdida de líquidos a través de la transpiración. Beber agua regularmente te ayudará a mantenerte fresco(a) y a prevenir la deshidratación.Además de agua, puedes consumir bebidas isotónicas o bebidas con electrolitos para reponer los minerales perdidos por la sudoración. Evita el consumo excesivo de bebidas azucaradas y bebidas con cafeína, ya que pueden aumentar la pérdida de líquidos y contribuir a la deshidratación.')
    } else if (imcResultado < 30) {
      categoria = 'Sobrepeso';
      setMessage('Las personas con tu IMC pueden tener una mayor retención de calor debido a la mayor cantidad de masa corporal. Esto puede hacer que sean más sensibles a las altas temperaturas y, en algunos casos, pueden experimentar una sensación de calor más intensa durante una ola de calor.')
    } else {
      categoria = 'Obesidad';
      setMessage('Las personas con obesidad pueden tener un mayor riesgo de sufrir efectos adversos debido a una mayor retención de calor y una menor capacidad para regular la temperatura corporal. Por lo tanto, es importante buscar lugares frescos y con aire acondicionado para mantenerse fresco(a) y evitar el sobrecalentamiento.')
    }
    setCategoria(categoria);
    if(diagData[0].water_gl<8){
      setMessageAgua(`Con un consumo de ${diagData[0].water_gl} vasos de agua no estas bebiendo agua suficiente.`)

    }else{
      setMessageAgua(`Con un consumo de ${diagData[0].water_gl} vasos de agua parece que  estas bebiendo agua suficiente.`)
    }
     if(diagData[0].activity =='Solo salgo a pasear' ){
      setMessageActiv('Si solo sales a pasear, es importante elegir el momento adecuado para hacerlo. Trata de programar tus paseos durante las horas más frescas del día, como temprano en la mañana o tarde en la noche, cuando las temperaturas son más suaves y hay menos exposición al sol directo.')
     }else if (diagData[0].activity =='Cada ciertas horas'){
      setMessageActiv('Si solo sales cada ciertas horas, intenta elegir el momento adecuado para hacerlo. Trata de programar tus paseos durante las horas más frescas del día, como temprano en la mañana o tarde en la noche, cuando las temperaturas son más suaves y hay menos exposición al sol directo.')
     }else if (diagData[0].activity =='Con frecuencia'){
      setMessageActiv('Ya que te ejercitas con frecuencia durante una ola de calor. Opta por actividades más suaves y de menor impacto para disminuir el esfuerzo físico. Por ejemplo, puedes optar por caminar en lugar de correr, o hacer ejercicios de menor intensidad en lugar de entrenamientos vigorosos.Así como hacer uso de instalaciones acondicionadas a las altas temperaturas')
     }else{
      setMessageActiv('En el caso de realizar activad física muy a menudo durante una ola de calor opta por el uso de instalaciones deportivas acondicionadas asi como restringir en la medida de lo posible realizarlas durante las horas de calor más intenso. En tu caso deberias hacer especial incapie en la hidratación y la ingesta de bebidas isotonicas o con electrolitos')
     }
     if(diagData[0].neuro_dis ==true ){
      setMessageDissN('Algunas condiciones neurológicas pueden afectar la percepción de la sed o la capacidad para mantener una ingesta adecuada de líquidos, por lo que es fundamental beber agua regularmente, incluso si no se siente sed.')
     }
     if(diagData[0].cardio_dis ==true ){
      setMessageDissC('Las personas con problemas cardíacos son más susceptibles a los efectos del calor extremo, ya que el corazón tiene que trabajar más para mantener la temperatura corporal y la circulación sanguínea adecuada. Durante una ola de calor, es fundamental mantenerse fresco(a) y evitar el esfuerzo físico excesivo para reducir la carga sobre el corazón.')
     }
     if(diagData[0].lung_dis ==true ){
      setMessageDissP('Las personas con enfermedades pulmonares pueden ser más sensibles a las altas temperaturas durante una ola de calor, lo que puede aumentar la dificultad para respirar y empeorar los síntomas respiratorios. Es fundamental tomar precauciones para mantenerse fresco(a) y evitar el esfuerzo físico excesivo para reducir la carga en los pulmones.')
     }
     if(diagData[0].digest_dis ==true ){
      setMessageDissD('Si tienes una enfermedad digestiva, es posible que ciertos alimentos puedan empeorar tus síntomas, especialmente durante una ola de calor. Evita alimentos picantes, grasosos o muy condimentados que puedan irritar el sistema digestivo.Puedes optar por otros alimentos más ligeros y de fácil digestión, como frutas, verduras, ensaladas y alimentos ricos en agua.')
     }

}, [diagData]);
//console.log(imcResultado)
//console.log(categoria)
// console.log(diagData)
// console.log(messageDissD)
// console.log(messageDissP)

// console.log(messageDissC)
// console.log(messageDissN)

  
  

  const symthoms = [
    "Fiebre de más de 40ºC.",
    "Calambres musculares.",
    "Mareos, vómitos y/o náuseas.",
    "Agitación y/o desorientación.",
    "Desmayos.",
  ];

  return (
    <>
      <section className="diagnostic-section">
        <article className="diagnostic-header-article">
          <div>
            <h1>Diagnóstico</h1>
            <img src={CuidatermIcon} alt="" />
          </div>
        </article>

        <article className="diagnostic-response-article">
          <p>Querido/a {userData.username},</p>
          <p>
            En base a tus datos, hemos calculado que tu imc {imcResultado} situa tu peso en {categoria}.
          </p>
          <p>{message}</p>
          <p>{messageAgua}</p>
          <p>{messageActiv}</p>
          {diagData[0].cardio_dis !== false && <p>{messageDissC}</p>}
          {diagData[0].digest_dis !== false && <p>{messageDissD}</p>}
          {diagData[0].neuro_dis !== false && <p>{messageDissN}</p>}
          {diagData[0].lung_dis !== false && <p>{messageDissP}</p>}
        </article>

        <article className="diagnostic-synthoms-article">
          <h3>Síntomas de un golpe de calor</h3>
          <ol>
            {symthoms.map((symthom) => (
              <li key={uuidv4()}>{symthom}</li>
            ))}
          </ol>
          <p>
            Si padeces alguno de los síntomas anteriores, acude al centro médico
            más cercano lo antes posible para recibir el tratamiento necesario.
          </p>
        </article>
      </section>
      <NavBar />
    </>
  );
};

export default Diagnostic;
