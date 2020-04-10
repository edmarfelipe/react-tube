import styled from 'styled-components'
import TimeAgo from 'react-timeago'

export const Container = styled.div`
  display: flex;
  flex-direction: ${p => (p.block ? 'column' : 'row')};
  margin-bottom: 25px;
  cursor: pointer;

  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`

export const Details = styled.div`
  margin: ${p => (p.block ? '14px 0 0 0' : '0 0 0 14px')};

  @media screen and (max-width: 680px) {
    margin: 14px 0 0;
    width: 100%;
  }
`

export const Thumbnail = styled.img`
  width: ${p => (p.block ? '100%' : '250px')};

  @media screen and (max-width: 680px) {
    width: 100%;
  }
`

export const Title = styled.h3`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 0;
`

export const Channel = styled.span`
  font-size: 13px;
  vertical-align: top;
`

export const Separator = styled.span`
  font-size: 13px;
  margin: 0 4px;
  vertical-align: top;
`

export const Published = styled(TimeAgo)`
  font-size: 13px;
  vertical-align: top;
`

export const Description = styled.div`
  font-size: 12px;
  margin-top: 5px;
  color: ${p => p.theme.colors.textSecundary};
`
