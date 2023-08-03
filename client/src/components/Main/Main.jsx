import { Routes, Route } from "react-router-dom";
import Form from "./Form/Form";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Signup from "./Signup/Signup";
import Perfil from "./Perfil/Perfil";
import Diagnostic from "./Diagnostic/Diagnostic";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Main = () => {
  
  const [userLogged, setUserLogged] = useState(null);

  useEffect(() => {
    const user_id = Cookies.get("user-logged");
    setUserLogged(user_id);
  }, []);

  return (
    <>
      <main>
        <Routes>
          {userLogged ? (
            <>
              <Route path="/" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/form" element={<Form />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/diagnostic" element={<Diagnostic />}></Route>
              <Route path="/perfil" element={<Perfil />}></Route>
            </>
          ) : (
            <>
              <Route path="/" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
            </>
          )}
        </Routes>
      </main>
    </>
  );
};

export default Main;
