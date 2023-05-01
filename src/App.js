import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import SignUp from "./Autication/signUp/signUp";
import Login from "./Autication/login/login";
import Reset from "./Autication/reset/reset";
import Change from "./Autication/change/Change";
import Confirm from "./Autication/change/check";
import Dashboard from "./DASHBOARD/Dashboard/Dashboard"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/change" element={<Change />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
