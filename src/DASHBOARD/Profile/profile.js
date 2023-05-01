import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import Viewprofile from "./viewProfile";
import Editprofile from "./editProfile";
import { Routes, Route } from "react-router-dom";
const Profile = (props) => {
  const Navigate = useNavigate();

  return (
    <div
      style={{
        width: "50%",
        // height: "80%",
        overflow: "auto",
        padding:"35px",
        backgroundColor:"rgba(217, 217, 217, 0.2)",
        margin:"40px 0px",
        borderRadius:"10px"
      }}
    >
      <Routes>
        <Route path="/" element={<Viewprofile />} />
        <Route path="/editprofile" element={<Editprofile />} />
      </Routes>
    </div>
  );
};

export default Profile;
