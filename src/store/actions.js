import { VIDEO_INVIEW, KEEP_LAYOUT_COMMENTS, UN_KEEP_LAYOUT_COMMENTS, LAYOUT_COMMENTS_DEFAULT, LAYOUT_COMMENTS_TEMPORARY, SHOW_MODAL, HIDE_MODAL, LOGIN_SUCCESS, LOGOUT_SUCCESS, UPDATE_FOLLOW, UPDATE_LIKED, SHOW_GETAPP, HIDE_GETAPP } from "./constance";


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
export const commentsDefault = payload => ({
    type: LAYOUT_COMMENTS_DEFAULT,
    payload
})

export const commentsTemporary = payload => ({
    type: LAYOUT_COMMENTS_TEMPORARY,
    payload
})
export const keepLayoutComments = payload => ({
    type: KEEP_LAYOUT_COMMENTS,
    payload
})
export const unKeepLayoutComments = payload => ({
    type: UN_KEEP_LAYOUT_COMMENTS,
    payload
})

export const updateVideoInview = (payload, payload2) => ({
    type: VIDEO_INVIEW,
    payload,
    payload2
})