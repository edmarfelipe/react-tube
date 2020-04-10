import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Container } from './styles'

export default function Loader({ width }) {
  const { colors } = useContext(ThemeContext)
  return (
    <Container aria-busy="true">
      <svg
        width={width}
        height={width}
        version="1.1"
        id="L9"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="15 15 70 70"
        enableBackground="new 0 0 0 0"
        stroke={colors.primary}
      >
        <path
          fill={colors.primary}
          d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
          transform="rotate(48.5035 50 50)"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          ></animateTransform>
        </path>
      </svg>
    </Container>
  )
}

Loader.defaultProps = {
  width: '50px'
}
