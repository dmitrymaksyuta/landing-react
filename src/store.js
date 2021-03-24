import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createBrowserHistory as createHistory} from 'history'
import {routerReducer, routerMiddleware} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "./redux/reducers"
import rootSaga from './redux/sagas/rootSaga'
import createSagaMiddleware from 'redux-saga'

const initialState = {

};

const sagaMiddleware = createSagaMiddleware()
const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, sagaMiddleware, routeMiddleware];

const store = createStore(
    combineReducers({
        rootReducer,
        router: routerReducer
    }),
    composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);
window.store = store;

export {store, history};
