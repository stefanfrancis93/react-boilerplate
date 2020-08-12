import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

const dev = process.env.NODE_ENV !== "production";

const middleware = dev ? [logger] : [];

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  reduxDevTools(applyMiddleware(...middleware)),
);

export default store;
