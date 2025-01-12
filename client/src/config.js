import { createChatBotMessage } from "react-chatbot-kit";

// Define the chatbot's responses
const config = {
  botName: "CitizenBot",
  initialMessages: [createChatBotMessage("Hello! How can I help you today?")],
  state: {
    messages: [],
  },
  customComponents: {},
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5C6BC0",
    },
  },
  widgets: [],
};

export default config;
