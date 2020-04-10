import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMostPopular } from 'api'
import { Loader, VideoCard } from 'components'
import { sucess, loading } from './actions'
import { Container, Grid, Title } from './styles'
import { animated, useTransition, config } from 'react-spring'

export default function Home() {
  const dispatch = useDispatch()
  const { isLoading, videos } = useSelector(state => state.homeReducer)

  const transitions = useTransition(
    videos,
    item => item.etag,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 }
    },
    config.slow
  )

  useEffect(() => {
    async function load() {
      const data = await getMostPopular()
      dispatch(sucess(data.items))
    }

    dispatch(loading())

    load()
  }, [dispatch])

  return (
    <Container>
      <Title>Most Popular</Title>

      {isLoading && <Loader />}

      <Grid>
        {isLoading ||
          transitions.map(({ item, props, key }) => (
            <animated.div key={key} style={props}>
              <VideoCard block video={item} />
            </animated.div>
          ))}
      </Grid>
    </Container>
  )
}
