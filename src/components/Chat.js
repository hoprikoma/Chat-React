import React, { PureComponent } from "react";
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";
// import Emoji from "react-emoji-render";

const chatStyle = {
  display: "flex",
  flexDirection: "column",
  width: '100%',
  height: '100vh',
  backgroundColor: "#D6D6D6"
};

class Chat extends PureComponent {
  state = {
    messages: []
  };

  login = prompt("Please enter your name:");

  handleOnSubmit = message => {
    const data = {
      body: message,
      username: this.login
    };
    const newMessages = [...this.state.messages, data];
    this.setState({ messages: newMessages });
  };

  render() {
    return (
      <div style={chatStyle}>
        <h1 style={{fontSize: 48}}>
          Chat <span role="img" aria-label="spaceInvader">👾</span>
        </h1>
        <MessageList messages={this.state.messages} />
        <MessageBar handleOnSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}

export default Chat;