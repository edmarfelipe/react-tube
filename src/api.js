import axios from 'axios'

const baseApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

baseApi.interceptors.request.use(config => {
  config.params = {
    key: process.env.REACT_APP_YOUTUBE_KEY,
    ...config.params
  }
  return config
})

export async function search(term, nextPageToken) {
  const resp = await baseApi.get('/search', {
    params: {
      q: term,
      part: 'snippet',
      maxResults: 10,
      type: 'video',
      pageToken: nextPageToken || null
    }
  })

  return resp.data
}

export async function getById(id) {
  const resp = await baseApi.get('/videos', {
    params: {
      id,
      part: 'snippet',
      type: 'video'
    }
  })

  return resp.data.items[0] || null
}

export async function getMostPopular() {
  const resp = await baseApi.get('/search', {
    params: {
      part: 'snippet',
      maxResults: 9,
      chart: 'mostPopular'
    }
  })

  return resp.data
}
