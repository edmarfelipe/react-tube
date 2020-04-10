import { LOADING, SUCCESS, LOADING_NEXT, LOAD_NEXT } from './actions'

const initialState = {
  isLoading: true,
  videos: [],
  nextPageToken: null,
  isLoadingMore: false
}

export function resultReducer(state = initialState, action) {
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
    case LOADING_NEXT:
      return {
        ...state,
        isLoadingMore: true
      }
    case LOAD_NEXT:
      return {
        ...state,
        ...action.payload,
        videos: [...state.videos, ...action.payload.videos],
        isLoadingMore: false
      }
    default:
      return state
  }
}
