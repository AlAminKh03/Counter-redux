import { Middleware } from "redux";
import { rootReducer } from "../rootReducer";
import { ActionType } from "../counter/counterTypes";

const myLogger: Middleware = (store) => (next) => (action: ActionType) => {
  const upComingState = [action].reduce(rootReducer, store.getState());
  console.log(JSON.stringify(upComingState));
  return next(action);
};

export default myLogger;
