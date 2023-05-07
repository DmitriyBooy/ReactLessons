import {combineReducers, createStore} from 'redux'

import ProfileReducer from './reducers/ProfileReducer'
import DialogsReducer from './reducers/DialogsReducer'
import SidebarReducer from './reducers/SidebarReducer'

let reducers = combineReducers({
  profilePage: ProfileReducer,
  dialogsPage: DialogsReducer,
  sidebarPage: SidebarReducer,
})

let store = createStore(reducers)

export default store