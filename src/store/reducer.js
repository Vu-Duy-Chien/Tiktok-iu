import { VIDEO_INVIEW, KEEP_LAYOUT_COMMENTS, UN_KEEP_LAYOUT_COMMENTS, LAYOUT_COMMENTS_TEMPORARY, LAYOUT_COMMENTS_DEFAULT, SHOW_MODAL, HIDE_MODAL, LOGIN_SUCCESS, LOGOUT_SUCCESS, UPDATE_FOLLOW, UPDATE_LIKED, SHOW_GETAPP, HIDE_GETAPP } from "./constance";

const userLogin = JSON.parse(localStorage.getItem('userLogin'))
let currentUser = {
    status: false,
    id: null,
    liked: [],
    follow: []
}

if (userLogin) {
    const listUser = JSON.parse(localStorage.getItem("listUsers"))
    const [keepLoginUser] = listUser.filter(item => item.id == userLogin.id)
    currentUser = {
        status: true,
        id: keepLoginUser.id,
        liked: keepLoginUser.liked,
        follow: keepLoginUser.follow
    }
}


export const initState = {
    authorInview: '',
    videoInview: '',
    layoutCommentDefault: true,
    keepLayoutComments: false,
    darkMode: false,
    getapp: false,
    authen: false,
    currentUser: currentUser
}


function reducer(state, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                authen: true
            }
        case HIDE_MODAL:
            return {
                ...state,
                authen: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: {
                    status: true,
                    id: action.payload.id,
                    liked: action.payload.liked,
                    follow: action.payload.follow
                }
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: {
                    status: false,
                    id: null,
                    liked: [],
                    follow: []
                }
            }
        case UPDATE_FOLLOW:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    follow: [...action.payload]
                }
            }
        case UPDATE_LIKED:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    liked: [...action.payload]
                }
            }
        case SHOW_GETAPP:
            return {
                ...state,
                getapp: true
            }
        case HIDE_GETAPP:
            return {
                ...state,
                getapp: false
            }
        case LAYOUT_COMMENTS_DEFAULT:
            return {
                ...state,
                layoutCommentDefault: true
            }
        case LAYOUT_COMMENTS_TEMPORARY:
            return {
                ...state,
                layoutCommentDefault: false
            }
        case KEEP_LAYOUT_COMMENTS:
            return {
                ...state,
                keepLayoutComments: true
            }
        case UN_KEEP_LAYOUT_COMMENTS:

            return {
                ...state,
                keepLayoutComments: false
            }
        case VIDEO_INVIEW:
            return {
                ...state,
                videoInview: action.payload,
                authorInview: action.payload2
            }
        default:
            throw new Error('Invalid action!')
    }
}

export default reducer