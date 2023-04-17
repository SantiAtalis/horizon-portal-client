import React from 'react'
import theme from './utils/theme'
import { ChakraProvider, Container } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW='100vw' color='secondary.100'>ehrfuhesurhiu </Container>
    </ChakraProvider>
  )
}

export default App
