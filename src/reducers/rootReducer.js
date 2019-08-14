import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import visibilityFilter from './visibilityFilter';


const rootReducer = combineReducers({
 todos: simpleReducer,
 visibilityFilter
})

export default rootReducer;