import { combineReducers } from 'redux'
import routes from './routes';
import userToSwipe from './userToSwipe'

const rootReducer = combineReducers({
  routes, // equivalente a routes: routes
  userToSwipe, // equivalente a userToSwipe: userToSwipe
})

export default rootReducer;
