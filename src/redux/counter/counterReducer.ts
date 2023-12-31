import { DECREMENT, INCREMENT } from "./actionTypes";
import { ActionType } from "./counterTypes";

const initialState = {
  value: 20,
};

const counterReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };

    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
