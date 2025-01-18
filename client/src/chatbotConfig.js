const config = {
  initialMessages: [
    {
      type: "text",
      text: "Welcome to Citizen Portal! How can I assist you today?",
    },
  ],
  botName: "CitizenBot",
};

const actionProvider = {
  handleAnswer: (state, action) => {
    return {
      type: "text",
      text: `You asked: ${action.payload}`,
    };
  },
};

const messageParser = (message) => {
  return {
    type: "text",
    text: message,
  };
};

export { config, actionProvider, messageParser };
