import React from 'react';
import MessageList from './MessageList';
import MessageBar from './MessageBar';

const chatStyle = {
    display: "flex",
    flexDirection: "column",
    width: '100%',
    height: '100vh',
    backgroundColor: "#D6D6D6"
  };

const Chat = () => {
  return (
    <div style={chatStyle}>
         <h1 style={{fontSize: 48}}>
           Chat <span role="img" aria-label="spaceInvader">👾</span>
         </h1>
      <MessageList />
      <MessageBar />
    </div>
  );
};

export default Chat;