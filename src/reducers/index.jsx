/**
 * reducers / index.jsx
 */
 
import { combineReducers } from 'redux'
import { CONST, SET, } from '../constants'

const apiLocation = () => {
  return 'default-api-location'
}

const navCollapse = (state = true, action) => {
  if (action.type === CONST.navCollapse) {
    return action.val
  }
  return state
}

const currentUser = (state = {}, action) => {
  if (action.type === SET.currentUser) {
    // console.log('+++ dispatched currentUser:', action.currentUser)
    return action.currentUser
  }
  return state
}

const newsitems = (state = [], action) => {
  if (action.type === SET.newsitems) {
    // console.log('+++ newsitems reducer:', action)
    return action.newsitems
  }
  return state
}

export default combineReducers({
  apiLocation,
  currentUser,
  navCollapse,
  newsitems,
})
