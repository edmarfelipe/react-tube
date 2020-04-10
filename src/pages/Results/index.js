import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'

import { sucess, loading, loadNextPage, loadingNextPage } from './actions'
import { Button, Loader, VideoCard } from 'components'
import { Container, Footer } from './styles'
import { search } from 'api'

export default function Results() {
  const { videos, isLoading, isLoadingMore, nextPageToken } = useSelector(
    state => state.resultReducer
  )

  const transitions = useTransition(videos, item => item.etag, {
    from: { opacity: 0, transform: 'translate3d(0,-30px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' }
  })

  const dispatch = useDispatch()
  const searchParams = useSearchParams()
  const term = searchParams.get('q')

  useEffect(() => {
    async function handleSubmit(term) {
      if (!term) {
        return
      }

      const data = await search(term)

      dispatch(sucess(data.items, data.nextPageToken))
    }

    dispatch(loading())

    handleSubmit(term)
  }, [dispatch, term])

  async function loadMore() {
    dispatch(loadingNextPage())

    const data = await search(term, nextPageToken)

    dispatch(loadNextPage(data.items, data.nextPageToken))
  }

  return (
    <Container>
      {isLoading && <Loader />}
      {isLoading ||
        transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <VideoCard block={false} video={item} />
          </animated.div>
        ))}
      {isLoading || (
        <Footer>
          {isLoadingMore && <Loader />}
          {isLoadingMore || <Button onClick={loadMore}>Load More</Button>}
        </Footer>
      )}
    </Container>
  )
}
