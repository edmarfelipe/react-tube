import styled from 'styled-components'

export const Container = styled.button`
  text-transform: uppercase;
  border: 0;
  background: transparent;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: #606060;
  border-radius: 4px;
  padding: ${p => (p.simple ? '0px' : '8px 12px')};

  :hover {
    background: ${p => (p.simple ? 'transparent' : '#f0f0f0')};
  }
`
