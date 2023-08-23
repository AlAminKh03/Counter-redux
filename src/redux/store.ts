import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";
import myLogger from "./middlewares/MyLogger";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, myLogger))
);

export default store;
