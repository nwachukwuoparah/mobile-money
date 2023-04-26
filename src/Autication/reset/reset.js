import React from "react";
import Input from "../../Components/Input/input";
import { Box, Button, Stack, Typography } from "@mui/material";
import Logo from "./Group 46.png";
import { useNavigate } from "react-router-dom";

const Reset = (props) => {
  const navigate = useNavigate();

  const formInfo = [
    {
      id: 1,
      name: "email",
      placeholder: "Enter your email address",
      type: "text",
    },
  ];

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      height="100vh"
    >
      <img
        style={{
          marginBottom: 30,
          width: 120,
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
        padding="40px 0px"
        gap={6}
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
          REQUEST PASSWORD RESET
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
          spacing={5}
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
            Request reset
          </Button>
          <Stack direction="row" spacing={0.5}>
            <Typography>Remember your password?</Typography>
            <Typography
              onClick={() => navigate("/login")}
              sx={{ color: "#E59500", cursor: "pointer" }}
            >
              Log In
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Reset;
