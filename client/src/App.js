import React from "react";
import "./App.css";
import Chatbot from "react-chatbot-kit";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

// Main App component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Citizen Portal Chatbot</h1>
      </header>

      <div style={{ position: "absolute", bottom: 10, right: 10 }}>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
}

export default App;
