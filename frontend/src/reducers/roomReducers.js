import {
    ROOMS_LIST_REQUEST,
    ROOMS_LIST_SUCCESS,
    ROOMS_LIST_FAIL,

    ROOM_DETAIL_REQUEST,
    ROOM_DETAIL_SUCCESS,
    ROOM_DETAIL_FAIL,
} from "../constants/roomConstants";

export const roomListReducer = (state = {rooms:[]}, action) => {
    switch(action.type) {
        case ROOMS_LIST_REQUEST:
            return {
                rooms: [],
                loading: true,
            }

        case ROOMS_LIST_SUCCESS:
            return {
                loading: false,
                rooms: action.payload
            }

        case ROOMS_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const roomDetailsReducer = (state = {room:{reviews:[], messages:[]}}, action) => {
    switch(action.type) {
        case ROOM_DETAIL_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case ROOM_DETAIL_SUCCESS:
            return {
                loading: false,
                room: action.payload
            }

        case ROOM_DETAIL_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}