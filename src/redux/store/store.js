import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas/rootSaga";



const sagaMiddleware = createSagaMiddleware();
/* eslint-disable no-underscore-dangle */
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
 
},( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


/* eslint-enable */

sagaMiddleware.run(rootSaga);

export default store;
