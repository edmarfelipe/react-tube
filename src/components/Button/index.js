import React from 'react'

import { Container } from './styles'

export default function Button({ onClick, children, simple }) {
  return (
    <Container simple={simple} onClick={onClick}>
      {children}
    </Container>
  )
}
