import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { allMessagesReducer, allTopicsReducer, messageCreateReducer, roomCreateReducer, roomCreateReviewReducer, roomDetailsReducer, roomEditReducer, roomListReducer } from './reducers/roomReducers'
import { userListReducer, userLoginReducer, userProfileReducer, userRegisterReducer } from './reducers/userReducers'

const reducer = combineReducers({
    roomList: roomListReducer,
    roomCreate: roomCreateReducer,
    roomCreateReview: roomCreateReviewReducer,
    roomEdit: roomEditReducer,
    messageCreate: messageCreateReducer,
    allMessages: allMessagesReducer,
    allTopics: allTopicsReducer,
    roomDetails: roomDetailsReducer,
    
    userProfile: userProfileReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userList: userListReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store