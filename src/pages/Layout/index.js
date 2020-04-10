import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SearchBar } from 'components'
import { Container } from './styles'
import { ThemeProvider } from 'styled-components'
import { changeTheme } from './actions'

import GlobalStyle from 'styles/GlobalStyle'

export default function Layout() {
  const { theme, isDark } = useSelector(state => state.themeReducer)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSubmit(term) {
    navigate(`/results?q=${term}`)
  }

  function toggleTheme() {
    dispatch(changeTheme(!isDark))
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SearchBar
        handleFormSubmit={term => handleSubmit(term)}
        isDark={isDark}
        changeTheme={toggleTheme}
      />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  )
}
