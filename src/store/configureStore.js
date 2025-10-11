import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});
