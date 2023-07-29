import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
