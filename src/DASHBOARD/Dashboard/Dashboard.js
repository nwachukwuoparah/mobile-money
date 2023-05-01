import {
  Button,
  Box,
  Stack,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Icon,
} from "@mui/material";
import "./dashboard.css";
import React from "react";
import Logo from "../Image/Group 46.png";
import image1 from "../Image/bro.png";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

import AddIcon from "@mui/icons-material/Add";
import SyncAltSharpIcon from "@mui/icons-material/SyncAltSharp";
import SaveAltSharpIcon from "@mui/icons-material/SaveAltSharp";

import { Routes, Route } from "react-router-dom";
import Walet from "../Walet/walet";
import Profile from "../Profile/profile";
import Editprofile from "../Profile/editProfile";
import Transaction from "../Transaction/transaction";
import Compliance from "../Compliance/compliance";
const Dashboard = (props) => {
  const Icons = [
    {
      id: 1,
      Icon: <AddIcon sx={{ color: "#000000" }} />,
      text: "Airtime",
    },
    {
      id: 2,
      Icon: <SyncAltSharpIcon sx={{ color: "#000000", fontSize: 20 }} />,
      text: "Transfer",
    },
    {
      id: 3,
      Icon: <SaveAltSharpIcon sx={{ color: "#000000", fontSize: 20 }} />,
      text: "Deposit",
    },
    {
      id: 4,
      Icon: <FiSend color="#000000" />,
      text: "Request",
    },
  ];

  const transation = [
    {
      id: 1,
      type: "Spotify",
      amount: "3,400",
    },
    {
      id: 1,
      type: "Netflix",
      amount: "3,400",
    },
    {
      id: 1,
      type: "Paypal",
      amount: "3,400",
    },
    {
      id: 1,
      type: "Adobe CC",
      amount: "3,400",
    },
  ];

  return (
    <Stack direction="row" height="107vh">
      <Stack
        paddingTop={2}
        direction="column"
        alignItems="center"
        width="25%"
        // backgroundColor="grey"
      >
        <Stack width="80%">
          <img style={{ marginBottom: 30, width: 120 }} src={Logo} alt="Logo" />
        </Stack>
        <Stack spacing={6} width="80%">
          <Stack spacing={2} width="80%">
            <NavLink className="dash_navsA">
              <Typography variant="p">Dashboard </Typography>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "dash_navsA" : "dash_navs"
              }
              to={"/dashboard/"}
            >
              <FaWallet />
              <Typography variant="p" to={"/dashboard/"}>
                Wallet
              </Typography>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "dash_navsA" : "dash_navs"
              }
              to={"/dashboard/transaction"}
            >
              <BsGraphUpArrow />
              <Typography variant="p">Transaction</Typography>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "dash_navsA" : "dash_navs"
              }
              to={"/dashboard/profile"}
            >
              <AiOutlineUser />
              <Typography variant="p">Profile</Typography>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "dash_navsA" : "dash_navs"
              }
              to={"/dashboard/compliance"}
            >
              <MdEditNote />
              <Typography variant="p">Compliance</Typography>
            </NavLink>
          </Stack>

          <Stack width="100%">
            <Box
              sx={{
                width: "100%",
                backgroundColor: "rgba(217, 217, 217, 0.3)",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                paddingBottom: 4,
                paddingTop: 4,
              }}
            >
              <img
                style={{
                  width: "50%",
                }}
                src={image1}
              />
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: "800",
                  fontSize: "17px",
                  lineHeight: "30px",
                  color: "#002642",
                }}
                variant="p"
              >
                Discover PRO
              </Typography>
              <Typography
                sx={{
                  width: "80%",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "14px",
                  lineHeight: "21px",
                  textAlign: "center",
                }}
                variant="p"
              >
                Get incredible prices and additional features.
              </Typography>
              <Button
                sx={{
                  width: "80%",
                  height: "52px",
                  backgroundColor: "#011B33",
                }}
                variant="contained"
              >
                Upgrade
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <Routes>
        <Route path="/" element={<Walet />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/compliance" element={<Compliance />} />
      </Routes>
      <Stack
        paddingTop={2}
        direction="column"
        alignItems="center"
        width="25%"
        spacing={4}
      >
        <Stack width="80%" paddingTop={3} spacing={2}>
          <Stack
            // backgroundColor="grey"
            direction="row-reverse"
          >
            <IoSettingsOutline fontSize={25} />
          </Stack>

          <Stack
            // backgroundColor="#f8f8f8"
            direction="column"
            alignItems="center"
            spacing={2}
          >
            <FaUserCircle fontSize={70} color="#011B33" />
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "36px",
                color: "#002642",
              }}
              variant="p"
            >
              Raymond Opara
            </Typography>
          </Stack>

          <Stack direction="row" spacing={3}>
            {Icons.map((i) => (
              <Stack>
                <IconButton
                  key={i.id}
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: 2,
                    backgroundColor: "rgba(0, 38, 66, 0.1)",
                  }}
                >
                  {i.Icon}
                </IconButton>
                <Typography
                  variant="body2"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "300",
                    fontSize: "11px",
                    lineHeight: "27px",
                    color: "#002642",
                  }}
                >
                  {i.text}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Stack width="80%" spacing={2}>
          <Typography variant="h6">Latest Transaction</Typography>

          {transation.map((i) => (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: " #000000",
                  }}
                >
                  {i.type}
                </Typography>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 300,
                    fontSize: "10px",
                    lineHeight: "18px",
                    color: " #000000",
                  }}
                >
                  Payment
                </Typography>
              </Stack>

              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: " #000000",
                }}
              >
                ₦{i.amount}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Dashboard;
