import { ActionType } from "../counter/counterTypes";
import { DDECREMENT, DINCREMENT } from "./actionTypes";

const initialState = {
  value: 0,
};

const dynamicCounterReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case DINCREMENT:
      console.log(action.payload);
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};

export default dynamicCounterReducer;
