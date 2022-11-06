import {
    ROOMS_LIST_REQUEST,
    ROOMS_LIST_SUCCESS,
    ROOMS_LIST_FAIL,
} from "../constants/roomConstants";

export const roomListReducer = (state = {rooms:[]}, action) => {
    switch(action.type) {
        case ROOMS_LIST_REQUEST:
            return{
                loading: true
            }

        case ROOMS_LIST_SUCCESS:
            return{
                loading: false,
                rooms: action.payload
            }

        case ROOMS_LIST_FAIL:
            return{
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}