import { useContext, useEffect } from "react";
import { UserLoggedContext } from "../../../context/userLoggedContext";
import NavBar from "./NavBar/NavBar";
import AdviceSlider from "./AdviceSlider/AdviceSlider";

const Home = () => {
  const { userLogged } = useContext(UserLoggedContext);

  useEffect(()=>{
    console.log(userLogged.username);
  }, [userLogged])

  return (
    <>
      <span>Hola {userLogged && userLogged.username}</span>
      <AdviceSlider />
      <NavBar />
    </>
  );
};

export default Home;
