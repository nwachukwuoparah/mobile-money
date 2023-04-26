import { Typography } from "@mui/material";
import "./input.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Input = (props) => {
  const navigate = useNavigate();
  return (
    <label>
      {props.label && (
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontStyle: "normal",
            fontWeight: "900",
            fontSize: "18px",
            lineHeight: "36px",
            color: "#002642",
          }}
        >
          {props.label}
        </Typography>
      )}
      <input
        className="input"
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
      />
      {props.forget && (
        <Typography
          onClick={() => navigate("/reset")}
          variant="body1"
          component="p"
          sx={{cursor:'pointer'}}
        >
          {props.forget}
        </Typography>
      )}
    </label>
  );
};

export default Input;
