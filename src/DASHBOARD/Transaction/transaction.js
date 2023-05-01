import { Stack, Typography } from "@mui/material";
import React from "react";
import TransationCard from "./transactionCard";

const Transaction = (props) => {
  const Transaction = [
    {
      id: 1,
      transactions: "Shoprite Mall",
      date: "Jan 12,2023 at 5:30 PM",
      amount: "₦25,400",
      status: "Paid",
    },
    {
      id: 2,
      transactions: "Shoprite Mall",
      date: "Jan 12,2023 at 5:30 PM",
      amount: "₦25,400",
      status: "Paid",
    },
    {
      id: 3,
      transactions: "Shoprite Mall",
      date: "Jan 12,2023 at 5:30 PM",
      amount: "₦25,400",
      status: "Declined",
    },
    {
      id: 4,
      transactions: "Shoprite Mall",
      date: "Jan 12,2023 at 5:30 PM",
      amount: "₦25,400",
      status: "In Progress",
    },
    {
      id: 5,
      transactions: "Shoprite Mall",
      date: "Jan 12,2023 at 5:30 PM",
      amount: "₦25,400",
      status: "Paid",
    },
    {
      id: 6,
      transactions: "Shoprite Mall",
      date: "Jan 12,2023 at 5:30 PM",
      amount: "₦25,400",
      status: "Declined",
    },
    {
      id: 7,
      transactions: "Shoprite Mall",
      date: "Jan 12,2023 at 5:30 PM",
      amount: "₦25,400",
      status: "In Progress",
    },
    {
      id: 8,
      transactions: "Shoprite Mall",
      date: "Jan 12,2023 at 5:30 PM",
      amount: "₦25,400",
      status: "Paid",
    },
    {
      id: 9,
      transactions: "Shoprite Mall",
      date: "Jan 12,2023 at 5:30 PM",
      amount: "₦25,400",
      status: "Declined",
    },
    {
      id: 10,
      transactions: "Shoprite Mall",
      date: "Jan 12,2023 at 5:30 PM",
      amount: "₦25,400",
      status: "In Progress",
    },
    {
      id: 11,
      transactions: "Shoprite Mall",
      date: "Jan 12,2023 at 5:30 PM",
      amount: "₦25,400",
      status: "Paid",
    },
    {
      id: 12,
      transactions: "Shoprite Mall",
      date: "Jan 12,2023 at 5:30 PM",
      amount: "₦25,400",
      status: "Declined",
    },
    {
      id: 13,
      transactions: "Shoprite Mall",
      date: "Jan 12,2023 at 5:30 PM",
      amount: "₦25,400",
      status: "In Progress",
    },
    {
      id: 10,
      transactions: "Shoprite Mall",
      date: "Jan 12,2023 at 5:30 PM",
      amount: "₦25,400",
      status: "In Progress",
    },
    {
      id: 11,
      transactions: "Shoprite Mall",
      date: "Jan 12,2023 at 5:30 PM",
      amount: "₦25,400",
      status: "Paid",
    },
    {
      id: 12,
      transactions: "Shoprite Mall",
      date: "Jan 12,2023 at 5:30 PM",
      amount: "₦25,400",
      status: "Declined",
    },
    {
      id: 13,
      transactions: "Shoprite Mall",
      date: "Jan 12,2023 at 5:30 PM",
      amount: "₦25,400",
      status: "In Progress",
    },
  ];

  return (
    <Stack
      direction="column"
      alignItems="center"
      margin="40px 0px"
      width="50%"
      backgroundColor="rgba(217, 217, 217, 0.2)"
      borderRadius="10px"
    >
      <Stack
        display="flex"
        justifyContent="flex-end"
        width="90%"
        height="20%"
        spacing={2}
        // backgroundColor="red"
        padding="0px 0px 6px 0px"
      >
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "52px",
            color: "#002642",
          }}
          variant="h5"
        >
          Transactions{" "}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          // width="100%"
        >
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "15px",
              color: "#002642",
            }}
          >
            Number of transactions
          </Typography>
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "15px",
              color: "#002642",
            }}
          >
            Date
          </Typography>
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "15px",
              color: "#002642",
            }}
          >
            Amount
          </Typography>
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "15px",
              color: "#002642",
            }}
          >
            Status
          </Typography>
        </Stack>
      </Stack>
      <div style={{ width: "100%", height: "80%", overflow: "auto",padding:"10px 0px 0px 0px" }}>
        {Transaction.map((i) => (
          <TransationCard {...i} />
        ))}
      </div>
    </Stack>
  );
};

export default Transaction;
