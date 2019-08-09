import { combineReducers } from 'redux'
import ListReducer from './ListReducer'
// import visibilityFilter from './visibilityFilter'

export default combineReducers({
  list: ListReducer
})
