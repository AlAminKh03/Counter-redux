import { Dispatch } from "redux";
import { rootReducer } from "../rootReducer";

export interface ActionType {
  type: string;
  payload: number;
}

export type StateType = ReturnType<typeof rootReducer>;

export type dispatchType = Dispatch<any>;
