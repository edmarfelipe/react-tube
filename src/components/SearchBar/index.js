import React, { useState, useEffect, useContext } from 'react'
import Switch from 'react-switch'
import { shade } from 'polished'
import { ThemeContext } from 'styled-components'
import { useSearchParams } from 'react-router-dom'
import {
  Container,
  Button,
  Form,
  Logo,
  Nav,
  Options,
  FormControl
} from './styles'

export default function SearchBar({ handleFormSubmit, changeTheme, isDark }) {
  const [term, setTerm] = useState('')
  const { colors } = useContext(ThemeContext)
  const searchParams = useSearchParams()

  useEffect(() => {
    const urlTerm = searchParams.get('q')

    if (urlTerm) {
      setTerm(urlTerm)
    }
  }, [searchParams])

  function handleChange(event) {
    setTerm(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    handleFormSubmit(term)
  }

  return (
    <Nav>
      <Container>
        <a href="/">
          <Logo src="logo192.png" alt="logo" />
        </a>
        <Form onSubmit={e => handleSubmit(e)}>
          <FormControl>
            <input
              type="text"
              placeholder="Search"
              value={term}
              onChange={e => handleChange(e)}
            />
          </FormControl>
          <Button>
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              style={{ fill: '#ffffff80', height: '20px', opacity: '0.6' }}
            >
              <g>
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </g>
            </svg>
          </Button>
        </Form>
        <Options>
          <Switch
            onChange={changeTheme}
            checked={isDark}
            checkedIcon={false}
            uncheckedIcon={false}
            height={14}
            width={40}
            handleDiameter={20}
            offColor={shade(0.15, colors.background)}
            onColor={colors.primary}
          />
        </Options>
      </Container>
    </Nav>
  )
}
