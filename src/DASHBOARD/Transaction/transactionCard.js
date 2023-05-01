import React from "react";
import { Stack, Typography } from "@mui/material";

const TransationCard = (props) => {
  return (
    <Stack
      //   style={{ height: "100%", overflowY: "auto" }}
      width="100%"
      height="10%"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        "&:hover": {
          backgroundColor: "#ffffff",
        },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="90%"
      >
        <Stack
          width="60%"
          //   backgroundColor="red"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {" "}
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "15px",
              color: "#002642",
            }}
          >
            {props.transactions}
          </Typography>
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "15px",
              color: "#002642",
            }}
          >
            {props.date}
          </Typography>
        </Stack>

        <Stack
          width="33%"
          //   backgroundColor="red"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "15px",
              color: "#002642",
            }}
          >
            {props.amount}
          </Typography>
          {props.status === "Paid" && (
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "15px",
                color: "#1ED760",
              }}
            >
              {props.status}
            </Typography>
          )}

          {props.status === "In Progress" && (
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "15px",
                color: "rgba(0, 38, 66, 0.6)",
              }}
            >
             {props.status}
            </Typography>
          )}

          {props.status === "Declined" && (
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "15px",
                color: "rgba(229, 9, 20, 0.6)",
              }}
            >
              Status
            </Typography>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TransationCard;
