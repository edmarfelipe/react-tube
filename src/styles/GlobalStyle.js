import { createGlobalStyle } from 'styled-components'
import reboot from 'styled-reboot'

const options = {
  fontFamilyBase: 'Roboto, Arial, sans-serif'
}

const rebootCss = reboot(options)

export default createGlobalStyle`
  ${rebootCss}

  body {
    background: ${p => p.theme.colors.background};
    color:${p => p.theme.colors.text};
  }
`
