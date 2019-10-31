import {
  ADD_MESSAGE_ACTION,
} from './../constants/action';

const INITIAL_STATE = {
  messages: [],
};

const messages = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION:
      return {
        messages: [
          ...state.messages,
          { message: action.message, username: action.username },
        ],
      };

    default:
      return state;
  }
};

export default messages;
