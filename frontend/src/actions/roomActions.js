import {
    ROOMS_LIST_REQUEST,
    ROOMS_LIST_SUCCESS,
    ROOMS_LIST_FAIL,

    ROOM_DETAIL_REQUEST,
    ROOM_DETAIL_SUCCESS,
    ROOM_DETAIL_FAIL,

    MESSAGE_LIST_REQUEST,
    MESSAGE_LIST_SUCCESS,
    MESSAGE_LIST_FAIL,

    TOPIC_LIST_REQUEST,
    TOPIC_LIST_SUCCESS,
    TOPIC_LIST_FAIL,
} from "../constants/roomConstants";
import { GET_ALL_MESSAGES_ENDPOINT, GET_ALL_ROOMS_ENDPOINT, GET_ALL_TOPICS_ENDPOINT } from "../constants/apiConstants";
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