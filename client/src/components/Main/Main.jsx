import { Routes, Route } from 'react-router-dom';
import Form from "./Form/Form";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Signup from './Signup/Signup';
import FakeAuth from './FakeAuth/FakeAuth';
import Diagnostico from './Diagnostico/Diagnostico';

const Main = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/form' element={<Form />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/fakeauth' element={<FakeAuth />}></Route>
          <Route path='/diagnostico' element={<Diagnostico />}></Route>
        </Routes>
      </main>
    </>
  );
};

export default Main;
