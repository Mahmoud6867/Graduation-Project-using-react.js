import {  combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import favoritesReducer from './reducers/reducer';
const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

const store = createStore(
  rootReducer
);

export default store;
