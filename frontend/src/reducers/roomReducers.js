import {
    ROOMS_LIST_REQUEST,
    ROOMS_LIST_SUCCESS,
    ROOMS_LIST_FAIL,

    ROOM_DELETE_REQUEST,
    ROOM_DELETE_SUCCESS,
    ROOM_DELETE_FAIL,

    ROOM_DETAIL_REQUEST,
    ROOM_DETAIL_SUCCESS,
    ROOM_DETAIL_FAIL,
    ROOM_DETAIL_RESET,

    ROOM_CREATE_REQUEST,
    ROOM_CREATE_SUCCESS,
    ROOM_CREATE_FAIL,
    ROOM_CREATE_RESET,

    ROOM_CREATE_REVIEW_REQUEST,
    ROOM_CREATE_REVIEW_SUCCESS,
    ROOM_CREATE_REVIEW_FAIL,
    ROOM_CREATE_REVIEW_RESET,

    ROOM_EDIT_REQUEST,
    ROOM_EDIT_SUCCESS,
    ROOM_EDIT_FAIL,
    ROOM_EDIT_RESET,

    MESSAGE_LIST_REQUEST,
    MESSAGE_LIST_SUCCESS,
    MESSAGE_LIST_FAIL,

    MESSAGE_CREATE_REQUEST,
    MESSAGE_CREATE_SUCCESS,
    MESSAGE_CREATE_FAIL,

    MESSAGE_DELETE_REQUEST,
    MESSAGE_DELETE_SUCCESS,
    MESSAGE_DELETE_FAIL,

    TOPIC_LIST_REQUEST,
    TOPIC_LIST_SUCCESS,
    TOPIC_LIST_FAIL,
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

export const roomDetailsReducer = (state = {room:{}}, action) => {
    switch(action.type) {
        case ROOM_DETAIL_REQUEST:
            return {
                ...state,
                room:{},
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

        case ROOM_DETAIL_RESET:
            return {room: {}}

        default:
            return state
    }
}

export const roomCreateReducer = (state = {}, action) => {
    switch(action.type) {
        case ROOM_CREATE_REQUEST:
            return {
                loading: true,
            }

        case ROOM_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                room: action.payload
            }

        case ROOM_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case ROOM_CREATE_RESET:
            return {}

        default:
            return state
    }
}

export const roomCreateReviewReducer = (state = {}, action) => {
    switch(action.type) {
        case ROOM_CREATE_REVIEW_REQUEST:
            return {
                loading: true,
            }

        case ROOM_CREATE_REVIEW_SUCCESS:
            return {
                loading: false,
                success: true,
            }

        case ROOM_CREATE_REVIEW_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case ROOM_CREATE_REVIEW_RESET:
            return {}

        default:
            return state
    }
}

export const roomEditReducer = (state = {}, action) => {
    switch(action.type) {
        case ROOM_EDIT_REQUEST:
            return {
                loading: true,
            }

        case ROOM_EDIT_SUCCESS:
            return {
                loading: false,
                success: true,
                room: action.payload
            }

        case ROOM_EDIT_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case ROOM_EDIT_RESET:
            return {}

        default:
            return state
    }
}

export const roomDeleteReducer = (state = {}, action) => {
    switch(action.type) {
        case ROOM_DELETE_REQUEST:
            return {
                loading: true,
            }

        case ROOM_DELETE_SUCCESS:
            return {
                loading: false,
                success: true,
            }

        case ROOM_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const messageCreateReducer = (state = {}, action) => {
    switch(action.type) {
        case MESSAGE_CREATE_REQUEST:
            return {
                messages:[],
                loading: true,
            }

        case MESSAGE_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
            }

        case MESSAGE_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const messageDeleteReducer = (state = {}, action) => {
    switch(action.type) {
        case MESSAGE_DELETE_REQUEST:
            return {
                loading: true,
            }

        case MESSAGE_DELETE_SUCCESS:
            return {
                loading: false,
                success: true,
            }

        case MESSAGE_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const allMessagesReducer = (state = {messages:[]}, action) => {
    switch(action.type) {
        case MESSAGE_LIST_REQUEST:
            return {
                messages:[],
                loading: true,
            }

        case MESSAGE_LIST_SUCCESS:
            return {
                loading: false,
                messages: action.payload
            }

        case MESSAGE_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const allTopicsReducer = (state = {topics:[]}, action) => {
    switch(action.type) {
        case TOPIC_LIST_REQUEST:
            return {
                topics:[],
                loading: true,
            }

        case TOPIC_LIST_SUCCESS:
            return {
                loading: false,
                topics: action.payload
            }

        case TOPIC_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}