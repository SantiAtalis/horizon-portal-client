import React from 'react'
import theme from './utils/theme'
import Header from './components/Header'
import Footer from './components/Footer'
import CustomButton from './components/CustomButton'
import { ChakraProvider, Container } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container minW='100vw' minH='85vh' color='secondary.100'><CustomButton /> </Container>
      <Footer />
    </ChakraProvider>
  )
}

export default App
