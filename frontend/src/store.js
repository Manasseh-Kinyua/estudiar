import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { roomDetailsReducer, roomListReducer } from './reducers/roomReducers'
import { userLoginReducer } from './reducers/userReducers'

const reducer = combineReducers({
    roomList: roomListReducer,
    roomDetails: roomDetailsReducer,
    userLogin: userLoginReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store