import {
    AUTH,
    CHANGE_LOGIN_STATUS
} from '../actions/action-types';

const initialState = {
    users: [],
    loginStatus: false
}

export default (state=initialState, action) => {
    switch(action.type) {
        case AUTH:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        
        case CHANGE_LOGIN_STATUS:
            return {
                ...state,
                loginStatus: action.payload
            }
        default: 
            return state;
    }
}