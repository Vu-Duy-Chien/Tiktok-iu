import { SHOW_MODAL, HIDE_MODAL, LOGIN_SUCCESS, LOGOUT_SUCCESS, UPDATE_FOLLOW, UPDATE_LIKED, SHOW_GETAPP, HIDE_GETAPP } from "./constance";


export const showModal = payload => ({
    type: SHOW_MODAL,
    payload
})

export const hideModal = payload => ({
    type: HIDE_MODAL,
    payload
})

export const loginSuccess = payload => ({
    type: LOGIN_SUCCESS,
    payload
})


export const logoutSuccess = payload => ({
    type: LOGOUT_SUCCESS,
    payload
})


export const updateFollow = payload => ({
    type: UPDATE_FOLLOW,
    payload
})

export const updateLiked = payload => ({
    type: UPDATE_LIKED,
    payload
})
export const showGetapp = payload => ({
    type: SHOW_GETAPP,
    payload
})
export const hideGetapp = payload => ({
    type: HIDE_GETAPP,
    payload
})