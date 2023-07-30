import { useContext, useEffect } from "react";
import { UserLoggedContext } from "../../../context/userLoggedContext";
import AdviceText from "./AdviceText/AdviceText";
import AdviceImage from "./AdviceImage/AdviceImage";
import Footer from "../../Footer/Footer";

const Home = () => {
  const { userLogged } = useContext(UserLoggedContext);

  useEffect(()=>{
    
  }, [userLogged])

  return (
    <>
      <AdviceText />
      <AdviceImage />
      <Footer />
    </>
  );
};

export default Home;
