import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    primary: {
      100: 'white'
    },
    secondary: {
      100: '#004494'
    },
    detail: {
      100: '#ffd617'
    }
  },
  sizes: {
    header: {
      size: '10vh'
    },
    footer: {
      size: '5vh'
    },
    container: {
      size: '85vh'
    }
  }
})

export default theme
