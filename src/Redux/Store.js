import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import bookReducers from './Reducers/bookReducers';


const combinedReducer = combineReducers({
    books: bookReducers,
})

export const store = createStore(combinedReducer, composeWithDevTools());