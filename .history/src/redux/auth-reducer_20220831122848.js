import { usersAuth } from "../api/api"

const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    userId: undefined,
    email: undefined,
    login: undefined,
    isAuth: false,
    myUserProfile: {}
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: false
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} })  

export const getAuthUserData = () => {
    return (dispatch) => {
        usersAuth.getAuth().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}

export default authReducer;



