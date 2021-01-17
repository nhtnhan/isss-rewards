import { GET_YEARS } from '../store/types'

const initialState = {
  yearList: []
}

const yearReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GET_YEARS:
      return { ...state, yearList: payload.yearList }
    default:
      return state;
  }
}

export default yearReducer;