import React from "react";
import { Button, Stack, Typography, Box } from "@mui/material";
import Image from "./_Downloader 6 (1).png";
import { useNavigate } from "react-router-dom";
const Viewprofile = (props) => {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      title: "Username",
      item: "Raymond Opara",
    },
    {
      id: 1,
      title: "Email",
      item: "Oparankume@gmail.com",
    },
    {
      id: 1,
      title: "Phone Number",
      item: "0802357686",
    },
    {
      id: 1,
      title: "Address ",
      item: "23 Ozumba Close, Lagos",
    },
  ];

  return (
    <Stack
      direction="column"
      alignItems="center"
      width="100%"
      // backgroundColor="rgba(217, 217, 217, 0.2)"
      borderRadius="10px"
      spacing={7}
    >
      <Typography variant="h5">Profile</Typography>
      <Stack width="90%" height="80%" spacing={5}>
        <Stack
          width="100%"
          direction="row"
          justifyContent="space-between"
        >
          <Box
            display="flex"
            backgroundColor="rgba(229, 149, 0, 0.8)"
            width="55%"
            borderRadius={5}
            alignItems="flex-end"
          >
            <img style={{ width: "100%", height: "80%" }} src={Image} />
          </Box>

          <Stack width="40%" padding="10px 0px 0px 0px" spacing={1}>
            {data.map((i) => (
              <Stack>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: "36px",
                    color: "#000000",
                  }}
                  variant="body2"
                >
                  {i.title}
                </Typography>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "17px",
                    // lineHeight: "36px",
                    color: "#000000",
                  }}
                  variant="p"
                >
                  {i.item}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Button
          onClick={() => navigate("/dashboard/profile/editprofile")}
          sx={{
            width: "50%",
            alignSelf: "center",
            backgroundColor: "#002642",
            height: "55px",
          }}
          variant="contained"
        >
          Edit Profile
        </Button>
      </Stack>
    </Stack>
  );
};

export default Viewprofile;
