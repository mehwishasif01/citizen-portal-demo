class MessageParser {
  constructor(actionProvider, createChatBotMessage) {
    this.actionProvider = actionProvider;
    this.createChatBotMessage = createChatBotMessage;
  }

  // Function to parse user messages
  parse(message) {
    this.actionProvider.handleUserMessage(message);
  }
}

export default MessageParser;
