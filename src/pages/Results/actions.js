export const LOADING = 'RESULTS_LOADING'
export const SUCCESS = 'RESULTS_SUCCESS'
export const LOADING_NEXT = 'RESULTS_LOADING_NEXT'
export const LOAD_NEXT = 'RESULTS_LOAD_NEXT'

export function sucess(items, nextPageToken) {
  return {
    type: SUCCESS,
    payload: {
      videos: items,
      nextPageToken: nextPageToken
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

export function loadingNextPage() {
  return {
    type: LOADING_NEXT,
    payload: {
      videos: []
    }
  }
}

export function loadNextPage(items, nextPageToken) {
  return {
    type: LOAD_NEXT,
    payload: {
      videos: items,
      nextPageToken: nextPageToken
    }
  }
}
