import { ADD_MESSAGE_ACTION} from '../constants/action';

export const addMessage = (message, username) => {

    let ws = new WebSocket('ws://172.16.120.33:8080')
  

    // ws.onmessage = evt => {
    // const message = JSON.parse(evt.data)
    // this.setState({dataFromServer: message})
    // }

    ws.onopen = () => ws.send(message);

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

