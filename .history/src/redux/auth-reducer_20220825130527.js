const SET_USER_DATA = 'SET-USER-DATA'
// const UN_FOLLOW = 'UN-FOLLOW'

let initialState = {
    userId: undefined,
    email: undefined,
    password: undefined,
    isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const setUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} })  

// export const toggleFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default authReducer;



