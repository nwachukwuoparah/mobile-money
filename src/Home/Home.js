import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
const navigate = useNavigate()

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: 10,
      }}
    >
      <p>THE LANDING PAGE IS UNDER DEVELOPMENT CLICK</p>
      <h2 onClick={()=>navigate('/signup')} style={{ color: "blue" }}>here</h2>
      <p>TO VIEW SIGNUP</p>
    </div>
  );
};

export default Home;
