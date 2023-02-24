import {
  SET_CHATS,
  SET_USER_INFO,
  SET_ACTIVE_CHAT,
  SET_HISTORY,
  NEW_MESSAGE,
  UPDATE_USER_DETAILS,
  SAVE_CHAT,
} from "../actions";

const initialState = {
  userInfo: {},
  chats: [],
  activeChat: " ",
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHATS:
      return { ...state, chats: action.payload };

    case SET_USER_INFO:
      return { ...state, userInfo: action.payload };

    case UPDATE_USER_DETAILS:
      return { ...state, userInfo: { ...state.userInfo, ...action.payload } };

    case SET_ACTIVE_CHAT:
      // TODO: handle SET_ACTIVE_CHAT action
      return state;

    case SET_HISTORY:
      // TODO: handle SET_HISTORY action
      return state;

    case NEW_MESSAGE:
      // TODO: handle NEW_MESSAGE action
      return state;
    case SAVE_CHAT:
      return { ...state, activeChat: action.payload };

    default:
      return state;
  }
};

export default chatReducer;
