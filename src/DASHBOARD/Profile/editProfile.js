import { Stack, Typography, Box, Button } from "@mui/material";
import React from "react";
import Image from "./_Downloader 6 (1).png";
import Input from "../../Components/Input/input";

const Editprofile = (props) => {
  const formInfo = [
    {
      id: 1,
      name: "first name",
      label: "First Name",
      type: "text",
    },
    {
      id: 2,
      name: "last name",
      label: "Last Name",
      type: "text",
    },
    {
      id: 3,
      name: "email",
      label: "Email",
      type: "text",
    },
    {
      id: 4,
      name: "phone number",
      label: "Phone Number",
      type: "text",
    },
  ];

  return (
    <Stack
      direction="column"
      alignItems="center"
      width="100%"
      //   backgroundColor="rgba(217, 217, 217, 0.2)"
      borderRadius="10px"
      spacing={3}
    >
      <Typography variant="h5">Edit Profile</Typography>
      <Box
        display="flex"
        backgroundColor="rgba(229, 149, 0, 0.8)"
        width="20%"
        height={135}
        borderRadius={2}
        alignItems="flex-end"
      >
        <img style={{ width: "100%", height: "80%" }} src={Image} />
      </Box>
      <Stack width="70%" spacing={2}>
        {formInfo.map((i) => (
          <Input {...i} />
        ))}

        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "63px",
            backgroundColor: "#002642",
            borderRadius: "5px",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "38px",
            color: "#FFFFFF",
            cursor: "pointer",
          }}
        >
          Confirm
        </Button>
      </Stack>
    </Stack>
  );
};

export default Editprofile;
