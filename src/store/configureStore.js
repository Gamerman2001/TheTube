import { applyMiddleware, createStore, compose } from "redux";
import reducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware
  const composeEnhancers = window.__REDUX_EXTIONSION_DEVTOOLS_COMPOSE || compose
  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.arguments(rootSaga)

  return store;
}