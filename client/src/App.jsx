import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import { UserLoggedContext } from "./context/userLoggedContext";
import { useEffect, useState } from "react";

function App() {

  const [userLogged, setUserLogged] = useState(false);

  const updateUserLogged = () => {
    setUserLogged(true);
  };

  const userLoggedData = {
    userLogged,
    updateUserLogged,
  };

  return (
    <>
      <BrowserRouter>
        <UserLoggedContext.Provider value={userLoggedData}>
          <Main />
        </UserLoggedContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
