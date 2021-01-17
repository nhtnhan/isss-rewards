import { GET_USER_INFO } from '../types';

export const fetchUserInfo = (userId) => async dispatch => {
    try {
        // const res = await ...

        const mockData = {
            userId: 'userId-1234',
            userName: 'Joe',
            points: '6000',
        }

        dispatch({type: GET_USER_INFO, payload: {userInfo: mockData}});
    } catch (error) {
        console.log(error);
    }
}

