import React from 'react';
import { Emojione } from 'react-emoji-render';
import Moment from 'react-moment';

let dateToFormat = Date.now();

const MessageItem = ({ message }) => {
  return (
    <li>
      <p>{message.username}</p>
      <div><Moment date={dateToFormat} format="YYYY-MM-DD HH:mm:ss"/></div> {/*A essayer de mettre le date.now dans le date mais réactualise tout les messages*/}
      <div><Emojione text={message.message} /></div>
    </li>
  );
};


export default MessageItem;
