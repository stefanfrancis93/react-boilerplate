import { TEXT_ACTION } from "./types";

const initialState = {
  value: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEXT_ACTION:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
