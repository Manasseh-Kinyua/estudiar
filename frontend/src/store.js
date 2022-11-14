import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { allMessagesReducer, allTopicsReducer, messageCreateReducer, messageDeleteReducer, roomCreateReducer, roomCreateReviewReducer, roomDeleteReducer, roomDetailsReducer, roomEditReducer, roomListReducer } from './reducers/roomReducers'
import { deleteUserReducer, editUserProfileReducer, userDetailsReducer, userEditReducer, userListReducer, userLoginReducer, userProfileReducer, userRegisterReducer } from './reducers/userReducers'

const reducer = combineReducers({
    roomList: roomListReducer,
    roomCreate: roomCreateReducer,
    roomCreateReview: roomCreateReviewReducer,
    roomEdit: roomEditReducer,
    messageCreate: messageCreateReducer,
    messageDelete: messageDeleteReducer,
    allMessages: allMessagesReducer,
    allTopics: allTopicsReducer,
    roomDetails: roomDetailsReducer,
    roomDelete: roomDeleteReducer,
    
    userProfile: userProfileReducer,
    editUserProfile: editUserProfileReducer,
    userDetails: userDetailsReducer,
    userEdit: userEditReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userList: userListReducer,
    deleteUser: deleteUserReducer,
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