import { ADD_MESSAGE_ACTION} from '../constants/action';

export const addMessage = (message, username) => {

    let ws = new WebSocket('wss://srrj6.sse.codesandbox.io/')

    let fullMessage = {
      "type" : "ADD_MESSAGE",
      "username" : username,
      "message" : message
    }

    fullMessage = JSON.stringify(fullMessage)
    console.log(fullMessage);
    
  

    ws.onmessage = evt => {
      console.log(evt.data);
    }

    ws.onopen = () => ws.send(fullMessage);

    ws.onclose = () => {
    console.log('disconnected')

    }

  return {
    type: ADD_MESSAGE_ACTION,
    message,
    username,
  };
};

// export const wsConnection = () => {
//   return {
//     type: WS_CONNECTING
//   };
// };


// export const wsOpenened = () => {
//   return {
//     type: WS_OPENED
//   };
// };

// export const wsClosed = () => {
//   return {
//     type: WS_CLOSED
//   };
// };

