import React from "react";
import ChatBot from "react-simple-chatbot";

const Chatbot = () => {
  const steps = [
    {
      id: "1",
      message: "Welcome to the Citizen Chatbot! How can I assist you today?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Thank you for your message! We will get back to you shortly.",
      end: true,
    },
  ];

  //   return <h2>This is the Chatbot</h2>;

  return <ChatBot steps={steps} />;
};

export default Chatbot;
