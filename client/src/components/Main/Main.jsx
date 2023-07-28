import { Routes, Route } from 'react-router-dom';
import Form from "./Form/Form";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Form from "./Form/Form"

const Main = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/form' element={<Form />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </main>
    </>
  );
};

export default Main;
