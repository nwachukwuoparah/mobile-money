import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import SignUp from "./Autication/signUp/signUp";
import Login from "./Autication/login/login";
import Reset from "./Autication/reset/reset";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login/>} />
        <Route path="reset" element={<Reset />} />
      </Routes>
    </div>
  );
}

export default App;
