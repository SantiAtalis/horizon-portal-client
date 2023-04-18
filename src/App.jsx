import React from 'react'
import theme from './utils/theme'
import Header from './components/globalComponents/Header'
import Footer from './components/globalComponents/Footer'
import SearchPage from './pages/SearchPage'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <SearchPage />
      <Footer />
    </ChakraProvider>
  )
}

export default App
