import React from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Container,
  Thumbnail,
  Details,
  Title,
  Published,
  Channel,
  Description,
  Separator
} from './styles'

export default function VideoCard({ block, video }) {
  const { snippet } = video
  const navigate = useNavigate()

  function onSelect(videoId) {
    navigate(`/watch?v=${videoId}`)
  }

  return (
    <Container block={block} onClick={() => onSelect(video.id.videoId)}>
      <Thumbnail
        block={block}
        src={snippet.thumbnails.medium.url}
        alt={video.description}
      />
      <Details block={block}>
        <Title dangerouslySetInnerHTML={{ __html: snippet.title }} />
        <Channel>{snippet.channelTitle}</Channel>
        <Separator>•</Separator>
        <Published date={snippet.publishedAt} />
        {block || <Description> {snippet.description}</Description>}
      </Details>
    </Container>
  )
}
