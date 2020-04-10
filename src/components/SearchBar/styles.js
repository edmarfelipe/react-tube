import styled from 'styled-components'

export const Nav = styled.nav`
  background: #252525;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`

export const Logo = styled.img`
  height: 38px;
  margin: 10px 0;
  cursor: pointer;
`

export const Container = styled.div`
  max-width: ${p => p.theme.container};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`

export const Form = styled.form`
  width: 480px;
  padding: 10px;
  display: flex;
`

export const FormControl = styled.label`
  width: 100%;
  margin: 0;

  input {
    color: #ffffffe0;
    background-color: #121212;
    border: 1px solid #303030;
    border-radius: 2px 2px 2px 0;
    border-right: 0;
    padding: 6px 8px;
    width: 100%;

    @media screen and (max-width: 680px) {
      border-radius: 2px;
      border: 1px solid #303030;
    }

    :focus {
      outline: none;
      border: 1px solid ${p => p.theme.colors.primary};
    }
  }
`

export const Button = styled.button`
  cursor: pointer;
  width: 70px;
  padding: 1px 6px;
  background-color: #303030;
  border-radius: 0 2px 2px 0;
  border: 1px solid #303030;
  border-left: 0;
  flex-shrink: 0;

  @media screen and (max-width: 680px) {
    display: none;
  }
`

export const Options = styled.div`
  display: flex;
  align-items: center;
`
