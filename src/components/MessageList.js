import React from 'react';
import MessageItem from './MessageItem';
import { connect } from 'react-redux';

const MessageList = ({ messages }) => {
  return (
    <ul>
      {messages.map((message, i) => {
        return (<MessageItem 
          key={i} 
          index={i} 
          message={message} 
        />);
      })}
  {messages.length === 0 && <li>Il n'y a pas de message <span role="img" aria-label="zzz">😴</span></li>}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    messages: state.message.messages,
  };
};

const connectComponent = connect(mapStateToProps);

export default connectComponent(MessageList);
