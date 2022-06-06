import { AUTH, CHANGE_LOGIN_STATUS } from "./action-types"

export const register = (user) => (dispatch) => {
    dispatch({
        type: AUTH,
        payload: user
    })
}

export const changeLoginStatus = (status) => (dispatch) => {
    dispatch({
        type: CHANGE_LOGIN_STATUS,
        payload: status
    })
}