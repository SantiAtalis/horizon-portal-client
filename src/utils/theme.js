import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    primary: {
      base: 'white'
    },
    secondary: {
      base: '#004494'
      // hover:
    },
    detail: {
      base: '#ffd617'
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
      height: '85vh',
      width: '100vw'
    }
  }
})

export default theme
