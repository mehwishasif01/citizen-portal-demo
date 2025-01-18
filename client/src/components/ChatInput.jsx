import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const ChatInput = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: "10px",
        position: "fixed",
        bottom: "100px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "600px",
        zIndex: 1,
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        label="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{ marginRight: "10px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSendMessage}
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send"}
      </Button>
    </Box>
  );
};

export default ChatInput;
