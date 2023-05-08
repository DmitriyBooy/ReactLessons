import {combineReducers, createStore} from 'redux'

import ProfileReducer from './reducers/ProfileReducer'
import DialogsReducer from './reducers/DialogsReducer'
import SidebarReducer from './reducers/SidebarReducer'
import UsersReducer from "./reducers/UsersReducer";

let reducers = combineReducers({
  profilePage: ProfileReducer,
  dialogsPage: DialogsReducer,
  sidebarPage: SidebarReducer,
  usersPage: UsersReducer,
})

let store = createStore(reducers)

export default store