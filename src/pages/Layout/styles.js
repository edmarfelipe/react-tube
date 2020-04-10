import styled from 'styled-components'

export const Container = styled.div`
  width: ${p => p.theme.container};
  margin: 0 auto 0;
  padding-top: 58px;

  @media screen and (max-width: ${p => p.theme.container}) {
    width: auto;
  }
`
