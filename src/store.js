import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { userReducer, usersReducer } from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = combineReducers({
    user: userReducer,
    users: usersReducer,
    // дописать остальные
})
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))