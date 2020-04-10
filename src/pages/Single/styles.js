import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const VideoContainer = styled.div`
  margin: 20px 0;
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;

  @media screen and (max-width: 680px) {
    margin: 0 0 20px;
  }
`

export const Video = styled.iframe`
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 400;
`

export const Description = styled.div`
  color: ${p => p.theme.colors.textSecundary};
  white-space: pre-wrap;
  overflow: hidden;
  font-size: 14px;
  max-height: ${p => (p.isExpanded ? 'auto' : '60px')};
`

export const Details = styled.div`
  @media screen and (max-width: 680px) {
    margin: 5px;
  }
`
