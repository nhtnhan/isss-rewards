import { GET_USER_ID, GET_USER_INFO } from '../store/types';

export const initialState = {
    userId: null,
    userInfo: null
};

const userInfo = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case GET_USER_ID:
            return { ...state, userId: payload.userId };
        case GET_USER_INFO:
            return {...state, userInfo: payload.userInfo };
        default:
            return state;
    }
};

export default userInfo;