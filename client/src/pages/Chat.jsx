import React, { useState } from "react";
import { Container, Typography, Box, Chip } from "@mui/material";
import { ChatBox, ChatInput } from "../components";
import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "../services/sendMessage";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      text: (
        <>
          <Typography>Hi! How can I assist you today?</Typography>
          <Typography>
            You can ask questions about your Local Government, State
            Legislature, or Federal Services.{" "}
          </Typography>
          <Typography> Click on a category below to get started! </Typography>
        </>
      ),
      from: "bot",
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["Local", "State", "Federal"];

  const mutation = useMutation({
    mutationFn: sendMessage, // Function that sends the request to the backend
    onSuccess: (data) => {
      // Simulate a bot response with data from the backend
      const botResponse = {
        text: `${data.answer}.`,
        from: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    },
    onError: (error) => {
      // Handle error by showing a bot error response
      const botError = {
        text:
          "Sorry, I couldn't fetch the information. Please try again later.",
        from: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botError]);
    },
  });

  const handleChipClick = (category) => {
    const newMessage = {
      text: `I want to know about ${category}.`,
      from: "user",
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setSelectedCategory(category);

    // Trigger the backend call via mutation
    mutation.mutate({
      question: "question",
      level: category,
    });
  };

  const handleSendMessage = (message) => {
    const newMessage = { text: message, from: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Trigger the mutation to send the message to the backend
    mutation.mutate({ question: message, level: selectedCategory });
  };

  return (
    <Container sx={{ maxWidth: "800px", marginTop: "50px" }}>
      <Typography variant="h5" gutterBottom>
        Your Virtual City Assistant
      </Typography>

      <ChatBox
        messages={messages}
        categories={categories}
        handleChipClick={handleChipClick}
      />
      <ChatInput
        onSendMessage={handleSendMessage}
        isLoading={mutation.isLoading}
      />
    </Container>
  );
};

export default ChatPage;
