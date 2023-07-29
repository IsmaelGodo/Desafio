import { useContext, useEffect } from "react";
import { UserLoggedContext } from "../../../context/userLoggedContext";

const Home = () => {
  const { userLogged } = useContext(UserLoggedContext);

  useEffect(()=>{
    console.log(userLogged.username)
  }, [userLogged])

  return <p>{userLogged && userLogged.user_id}</p>;
};

export default Home;
