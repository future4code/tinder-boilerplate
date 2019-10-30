import { combineReducers } from 'redux'
import routes from './routes';
import currentUser from './currentUser'

const rootReducer = combineReducers({
  routes, // equivalente a routes: routes
  currentUser,
})

export default rootReducer;
