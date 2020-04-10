import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 0 10px;
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;

  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`
