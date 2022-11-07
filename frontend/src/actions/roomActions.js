import {
    ROOMS_LIST_REQUEST,
    ROOMS_LIST_SUCCESS,
    ROOMS_LIST_FAIL,

    ROOMS_DETAILS_REQUEST,
    ROOMS_DETAILS_SUCCESS,
    ROOMS_DETAILS_FAIL,
} from "../constants/roomConstants";
import { GET_ALL_ROOMS_ENDPOINT } from "../constants/apiConstants";
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
            type: ROOMS_DETAILS_REQUEST
        })

        const {data} = await axios.get(`${GET_ALL_ROOMS_ENDPOINT}${id}`)
        dispatch({
            type: ROOMS_DETAILS_SUCCESS,
            payload: data
        })

    }catch(error) {
        dispatch({
            type: ROOMS_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
} 