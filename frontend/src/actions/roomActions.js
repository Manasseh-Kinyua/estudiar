import {
    ROOMS_LIST_REQUEST,
    ROOMS_LIST_SUCCESS,
    ROOMS_LIST_FAIL,

    ROOM_DETAIL_REQUEST,
    ROOM_DETAIL_SUCCESS,
    ROOM_DETAIL_FAIL,

    ROOM_CREATE_REQUEST,
    ROOM_CREATE_SUCCESS,
    ROOM_CREATE_FAIL,

    ROOM_CREATE_REVIEW_REQUEST,
    ROOM_CREATE_REVIEW_SUCCESS,
    ROOM_CREATE_REVIEW_FAIL,
    ROOM_CREATE_REVIEW_RESET,

    ROOM_EDIT_REQUEST,
    ROOM_EDIT_SUCCESS,
    ROOM_EDIT_FAIL,

    MESSAGE_LIST_REQUEST,
    MESSAGE_LIST_SUCCESS,
    MESSAGE_LIST_FAIL,

    MESSAGE_CREATE_REQUEST,
    MESSAGE_CREATE_SUCCESS,
    MESSAGE_CREATE_FAIL,

    TOPIC_LIST_REQUEST,
    TOPIC_LIST_SUCCESS,
    TOPIC_LIST_FAIL,
} from "../constants/roomConstants";
import { CREATE_MESSAGE_ENDPOINT, CREATE_ROOM_ENDPOINT, CREATE_ROOM_REVIEW_ENDPOINT, EDIT_ROOM_ENDPOINT, GET_ALL_MESSAGES_ENDPOINT, GET_ALL_ROOMS_ENDPOINT, GET_ALL_TOPICS_ENDPOINT } from "../constants/apiConstants";
import { GET_SINGLE_ROOM_ENDPOINT } from "../constants/apiConstants";
import axios from 'axios'

export const listRooms = () => async (dispatch) => {
    try {
        dispatch({
            type: ROOMS_LIST_REQUEST
        })

        const {data} = await axios.get(GET_ALL_ROOMS_ENDPOINT)
        dispatch({
            type: ROOMS_LIST_SUCCESS,
            payload: data
        })

    }catch(error) {
        dispatch({
            type: ROOMS_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
} 

export const listRoomDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: ROOM_DETAIL_REQUEST
        })

        const {data} = await axios.get(`${GET_SINGLE_ROOM_ENDPOINT}${id}/`)
        dispatch({
            type: ROOM_DETAIL_SUCCESS,
            payload: data
        })

    }catch(error) {
        dispatch({
            type: ROOM_DETAIL_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
} 

export const createRoom = (room) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ROOM_CREATE_REQUEST
        })

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(
            CREATE_ROOM_ENDPOINT,
            room,
            config
            )
        dispatch({
            type: ROOM_CREATE_SUCCESS,
            payload: data
        })

    }catch(error) {
        dispatch({
            type: ROOM_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
} 

export const createRoomReview = (review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ROOM_CREATE_REVIEW_REQUEST
        })

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(
            `${CREATE_ROOM_REVIEW_ENDPOINT}${review.id}/`,
            review,
            config
            )
        dispatch({
            type: ROOM_CREATE_REVIEW_SUCCESS,
            payload: data
        })

    }catch(error) {
        dispatch({
            type: ROOM_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
} 

export const editRoom = (room) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ROOM_EDIT_REQUEST
        })

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(
            `${EDIT_ROOM_ENDPOINT}${room.id}/`,
            room,
            config
            )
        dispatch({
            type: ROOM_EDIT_SUCCESS,
            payload: data
        })

    }catch(error) {
        dispatch({
            type: ROOM_EDIT_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
} 

export const createMessage = (post) => async (dispatch, getState) => {
    try {
        dispatch({
            type: MESSAGE_CREATE_REQUEST
        })

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(
            `${CREATE_MESSAGE_ENDPOINT}${post.id}/`,
            post,
            config
            )
        dispatch({
            type: MESSAGE_CREATE_SUCCESS,
            payload: data
        })

    }catch(error) {
        dispatch({
            type: MESSAGE_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
} 

export const listAllMessages = () => async (dispatch) => {
    try {
        dispatch({
            type: MESSAGE_LIST_REQUEST
        })

        const {data} = await axios.get(GET_ALL_MESSAGES_ENDPOINT)
        dispatch({
            type: MESSAGE_LIST_SUCCESS,
            payload: data
        })

    }catch(error) {
        dispatch({
            type: MESSAGE_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
} 

export const listAllTopics = () => async (dispatch) => {
    try {
        dispatch({
            type: TOPIC_LIST_REQUEST
        })

        const {data} = await axios.get(GET_ALL_TOPICS_ENDPOINT)
        dispatch({
            type: TOPIC_LIST_SUCCESS,
            payload: data
        })

    }catch(error) {
        dispatch({
            type: TOPIC_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
} 