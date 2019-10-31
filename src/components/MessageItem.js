import React from "react";
import PropTypes from "prop-types";
import Moment from 'react-moment';

let dateToFormat = setTime()


function setTime() {
  return Date.now(); //Met la même date sur tout les message
}

const MessageItem = ({ message }) => {
  return (
    <li
      style={{
        marginBottom: 10
      }}
    >
      
            
      <span>{message.username}</span>
      <div><Moment date={dateToFormat} format="YYYY-MM-DD HH:mm:ss"/> :<br/> {message.body}</div> {/*A essayer de mettre le date.now dans le date mais réactualise tout les messages*/}
    </li>
  );
};

MessageItem.propTypes = {
  message: PropTypes.shape({
    body: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  })
};

export default MessageItem;
