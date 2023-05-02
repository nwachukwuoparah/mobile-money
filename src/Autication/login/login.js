import React from "react";
import Input from "../../Components/Input/input";
import { Box, Button, Stack, Typography } from "@mui/material";
import Logo from "./Group 46.png";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();

  const formInfo = [
    {
      id: 1,
      name: "email",
      label: "Email",
      type: "text",
    },

    {
      id: 2,
      name: "password",
      label: "Password",
      type: "text",
      forget: "Forget Password?",
    },
  ];

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      height="110vh"
    >
      <img
        onClick={() => navigate("/")}
        style={{
          marginBottom: 30,
          width: 120,
          cursor:"pointer"
        }}
        src={Logo}
        alt="Logo"
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="0px autio"
        component="div"
        width="50%"
        // height="55%"
        border="1px solid rgba(0, 38, 66, 0.5)"
        borderRadius="5px"
        padding="50px 0px"
        gap={3}
      >
        <Typography
          variant="h5"
          sx={{
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "54px",
            color: "#002642",
          }}
        >
          LOGIN
        </Typography>
        <Box
          component="div"
          width="70%"
          display="flex"
          flexDirection="column"
          gap={3}
        >
          {formInfo.map((i) => (
            <Input {...i} />
          ))}
        </Box>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          width="70%"
          //   backgroundColor="#f8f8f8"
        >
          <Button
            variant="contained"
            sx={{
              width: "100%",
              height: "63px",
              backgroundColor: "#002642",
              borderRadius: "10px",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "38px",
              color: "#FFFFFF",
              cursor: "pointer",
            }}
          >
            Login to your Account
          </Button>
          <Stack direction="row" spacing={0.5}>
            <Typography>New to Hanaka?</Typography>
            <Typography
              onClick={() => navigate("/signup")}
              sx={{ color: "#E59500", cursor: "pointer" }}
            >
              Sign up{" "}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Login;
