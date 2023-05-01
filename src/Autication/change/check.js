import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { Navigate, useNavigate } from "react-router-dom";
const Confirm = (props) => {
  const navigate = useNavigate();
  return (
    <Stack
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      spacing={3}
    >
      <Box
        sx={{
          width: "100px",
          height: "100px",
          backgroundColor: "rgba(229, 149, 0, 0.5)",
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HiOutlineEnvelope fontSize={60} color="#002642" />
      </Box>
      <Typography
        sx={{
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "40px",
          lineHeight: "60px",
          textAlign: "center",
          color: "#002642",
        }}
        variant="h4"
      >
        Check your email
      </Typography>

      <Stack
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        spacing={2.5}
      >
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "18px",
            textAlign: "center",
            lineHeight: "0px",
            color: "#000000",
          }}
        >
          We sent you a password resent link to
        </Typography>
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "18px",
            textAlign: "center",
            color: "#000000",
            textDecoration: "underline",
          }}
        >
          nwachukwuoparah@gmail.com
        </Typography>
        <Button
          sx={{
            width: "400px",
            height: "55px",
            background: "#002642",
            borderRadius: "10px",
          }}
          variant="contained"
        >
          Open email
        </Button>
        <Stack direction="row" spacing={1}>
          <Typography>Didn’t receive the email?</Typography>
          <Typography sx={{ color: "#E59500", cursor: "pointer" }}>
            {" "}
            Click to resend
          </Typography>
        </Stack>
        {/* <Button
          onClick={() => navigate("/login")}
          sx={{
            fontWeight: 500,
            fontSize: "13px",
            lineHeight: "0px",
            color: "#000000",
          }}
          variant="text"
          startIcon={<BsArrowLeft />}
        >
          Back to Log In
        </Button> */}
      </Stack>
    </Stack>
  );
};

export default Confirm;
