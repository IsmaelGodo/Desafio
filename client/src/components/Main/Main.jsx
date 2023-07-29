import { Routes, Route } from 'react-router-dom';
import Form from "./Form/Form";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Signup from './Signup/Signup';

const Main = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/form' element={<Form />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </main>
    </>
  );
};

export default Main;
