const MODE  = process.env.REACT_APP_MODE

if(MODE === 'dev') {
    var BASE_URL = "http://127.0.0.1:8000/api/"
} else if(MODE === 'prod') {
    var BASE_URL = "https://estudiar.up.railway.app/api/"
}
// export const BASE_URL = "https://estudiar.up.railway.app/api/"

export const GET_ALL_ROOMS_ENDPOINT = `${BASE_URL}rooms/`
export const GET_SINGLE_ROOM_ENDPOINT = `${BASE_URL}rooms/`
export const CREATE_ROOM_ENDPOINT = `${BASE_URL}rooms/create/`
export const CREATE_ROOM_REVIEW_ENDPOINT = `${BASE_URL}reviews/create/`
export const EDIT_ROOM_ENDPOINT = `${BASE_URL}rooms/edit/`
export const DELETE_ROOM_ENDPOINT = `${BASE_URL}rooms/delete/`

export const USER_LOGIN_ENDPOINT = `${BASE_URL}users/login/`
export const USER_REGISTER_ENDPOINT = `${BASE_URL}users/register/`
export const GET_ALL_USERS_ENDPOINT = `${BASE_URL}users/`
export const GET_USER_PROFILE_ENDPOINT = `${BASE_URL}users/profile/`
export const GET_USER_DETAILS_ENDPOINT = `${BASE_URL}users/details/`
export const EDIT_USER_PROFILE_ENDPOINT = `${BASE_URL}users/profile/update/`
export const DELETE_USER_PROFILE_ENDPOINT = `${BASE_URL}users/delete/`
export const EDIT_USER_ENDPOINT = `${BASE_URL}users/update/`

export const GET_ALL_MESSAGES_ENDPOINT = `${BASE_URL}messages/`
export const CREATE_MESSAGE_ENDPOINT = `${BASE_URL}messages/create/`
export const DELETE_MESSAGE_ENDPOINT = `${BASE_URL}messages/delete/`

export const GET_ALL_TOPICS_ENDPOINT = `${BASE_URL}topics/`