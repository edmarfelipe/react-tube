import { LOADING, SUCCESS } from './actions'

const initialState = {
  isLoading: true,
  videos: []
}

export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true
      }
    case SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false
      }
    default:
      return state
  }
}
