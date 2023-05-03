import { Container, Stack, Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

import HeroImage from "./Image/heroImage.png";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Container
        sx={{
          width: "87%",
          height: "13vh",
          // backgroundColor: "grey",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="45%"
          // backgroundColor="#f8f8f8"
        >
          <Button
            sx={{
              width: "120px",
              height: "42px",
            }}
            variant="contained"
          ></Button>
          <Stack
            width="60%"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            // backgroundColor="red"
          >
            <Button variant="text">Home</Button>{" "}
            <Button variant="text">About</Button>{" "}
            <Button variant="text">Contact</Button>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={4}>
          <Button onClick={() => navigate("/login")} variant="text">
            Login
          </Button>
          <Button
            sx={{
              width: "120px",
              height: "42px",
            }}
            variant="contained"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
        </Stack>
      </Container>

      <Container
        sx={{
          width: "87%",
          height: "105vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack width="55%" spacing={3}>
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 800,
              fontSize: "65px",
              lineHeight: "80px",
              color: "#002642",
            }}
          >
            Pay anywhere, at any time.
          </Typography>
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 800,
              fontSize: "25px",
              lineHeight: "40px",
              color: "#000000",
            }}
          >
            Hanaka is available for all of your online transactions and
            purchases.
          </Typography>
          <Button
            endIcon={<MdKeyboardArrowRight style={{width:'30px', height: '30px'}} />}
            sx={{
              width: "216px",
              height: "61px",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "30px",
              color: "#FFFFFF",
            }}
            variant="contained"
          >
            Sign Up
          </Button>
        </Stack>
        <Stack
          width="45%"
          height="80%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          objectFit="fill"
        >
          <img style={{ width: "40rem" }} src={HeroImage} />
        </Stack>
      </Container>





      <Container
        sx={{
          width: "87%",
          backgroundColor: "grey",
        }}
      >
        food
      </Container>
    </>
  );
};

export default Home;
