import {
  Stack,
  Typography,
  IconButton,
  Card,
  Button,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { BsFillBellFill, BsThreeDotsVertical, BsSearch } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import AddIcon from "@mui/icons-material/Add";
import Visa from "./image/visa 1.jpeg";
import Image1 from "./image/Group.png";
import Image2 from "./image/Group1.png";
const Walet = (props) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      margin="40px 0px 17.5px 0px"
      width="50%"
      backgroundColor="rgba(217, 217, 217, 0.2)"
      borderRadius="10px"
      spacing={12}
    >
      <Stack width="90%" paddingTop={3} spacing={8}>
        <Stack
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          // backgroundColor="red"
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            backgroundColor="#FFFFFF"
            borderRadius="70px"
            width="326px"
            height="35px"
          >
            <BsSearch />
            <input
              style={{
                width: "80%",
                height: "100%",
                outline: "none",
                border: "none",
              }}
            ></input>
          </Stack>

          <Stack direction="row" spacing={2}>
            <BsFillBellFill fontSize={20} />
            <BsThreeDotsVertical fontSize={20} />
          </Stack>
        </Stack>

        <Stack display="flex" direction="row" justifyContent="space-between">
          <img
            style={{
              width: "30%",
              height: "80%",
              alignSelf: "flex-end",
            }}
            src={Visa}
          />
          <Stack
            height="100%"
            width="60%"
            backgroundColor="#FFFFFF"
            borderRadius="10px"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            padding="0px 15px"
          >
            <Stack>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "36px",
                  color: "#002642",
                }}
              >
                Balance
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "30px",
                  lineHeight: "45px",
                  color: "#E59500",
                }}
              >
                ₦350,940
              </Typography>
            </Stack>
            <IconButton
              aria-label="add"
              sx={{
                width: 44,
                height: 44,
                borderRadius: 2,
                backgroundColor: "#002642",
                "&:hover": {
                  backgroundColor: "#002642",
                },
              }}
            >
              <AddIcon
                sx={{
                  color: "#E59500",
                  fontSize: 30,
                }}
              />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        width="90%"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Card
          elevation={0}
          sx={{
            width: 250,
            height: 330,
            backgroundColor: "#fffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            // backgroundColor='#f8f8f8'
            height={70}
            width="85%"
          >
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "25px",
                lineHeight: "24px",
                color: "#002642",
              }}
              variant="p"
            >
              Revenue
            </Typography>
            <Button
              sx={{ height: 10, color: "#002642" }}
              variant="text"
              endIcon={<MdKeyboardArrowDown />}
            >
              Month
            </Button>
          </Stack>

          <img style={{ width: "55%" }} src={Image1} />
        </Card>

        <Card
          elevation={0}
          sx={{
            width: 250,
            height: 330,
            backgroundColor: "#fffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            // backgroundColor='#f8f8f8'
            height={70}
            width="85%"
          >
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "25px",
                lineHeight: "24px",
                color: "#002642",
              }}
              variant="p"
            >
              Overview
            </Typography>
          </Stack>
          <Stack direction="column" alignItems="center" spacing={3}>
            <img style={{ width: "60%" }} src={Image2} />

            <Stack variant="div" spacing={1}>
              <Stack variant="span" direction="row" spacing={2}>
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    backgroundColor: "#E59500",
                    borderRadius: "5px",
                  }}
                ></Box>
                <Typography variant="p">Income</Typography>
              </Stack>
              <Stack variant="span" direction="row" spacing={2}>
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    backgroundColor: "#002642",
                    borderRadius: "5px",
                  }}
                ></Box>
                <Typography variant="p">Outcome </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Stack>
  );
};

export default Walet;
