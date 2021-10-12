import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missionsSlice';

const reducer = combineReducers({
  missionsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
