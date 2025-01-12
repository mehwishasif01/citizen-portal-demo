class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  // This function will be called when the user interacts with the chatbot
  handleUserMessage(message) {
    const botMessage = this.createChatBotMessage(
      `You said: ${message}. How can I assist you further?`
    );
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, botMessage],
    }));
  }
}

export default ActionProvider;
