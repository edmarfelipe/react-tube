import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from 'components'
import { getById } from 'api'

import {
  Container,
  Details,
  Description,
  Title,
  VideoContainer,
  Video
} from './styles'

export default function Single() {
  const [video, setVideo] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    async function load() {
      const id = searchParams.get('v')

      if (!id) {
        return
      }

      const data = await getById(id)

      setVideo(data)
    }

    load()
  }, [searchParams])

  function showMore() {
    setExpanded(!expanded)
  }

  return (
    <Container>
      {video && (
        <Container>
          <VideoContainer>
            <Video
              src={`https://www.youtube.com/embed/${video.id}`}
              title="the video player"
              allowFullScreen
            />
          </VideoContainer>
          <Details>
            <Title dangerouslySetInnerHTML={{ __html: video.snippet.title }} />
            <Description isExpanded={expanded}>
              {video.snippet.description}
            </Description>
            <Button simple onClick={showMore}>
              Show More
            </Button>
          </Details>
        </Container>
      )}
    </Container>
  )
}
