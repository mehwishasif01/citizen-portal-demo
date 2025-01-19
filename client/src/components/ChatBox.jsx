import React from "react";
import { Box, Typography, Paper, Divider, Chip } from "@mui/material";

const ChatBox = ({ messages, categories, handleChipClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "400px",
        overflowY: "auto",
        padding: "20px",
      }}
    >
      {messages.map((msg, index) => (
        <>
          {" "}
          <Paper
            key={index}
            sx={{
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: msg.from === "user" ? "#e3f2fd" : "#c5cae9",
              alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
            }}
          >
            <Typography variant="body1">{msg.text}</Typography>
          </Paper>
          <>
            {msg.from !== "user" && index === 0 && (
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                {categories.map((category) => (
                  <Chip
                    key={category}
                    label={category + " Government"}
                    onClick={() => {
                      handleChipClick(category);
                    }}
                    color="primary"
                    clickable
                    variant="outlined"
                  />
                ))}
              </Box>
            )}
          </>
        </>
      ))}

      <Divider sx={{ marginTop: "10px" }} />
    </Box>
  );
};

export default ChatBox;
