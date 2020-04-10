export const LOADING = 'HOME_LOADING'
export const SUCCESS = 'HOME_SUCCESS'

export function sucess(items) {
  return {
    type: SUCCESS,
    payload: {
      videos: items
    }
  }
}

export function loading() {
  return {
    type: LOADING,
    payload: {
      videos: []
    }
  }
}
