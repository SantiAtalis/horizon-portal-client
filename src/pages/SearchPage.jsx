import React from 'react'
import FilterBox from '../components/searchPageComponents/FilterBox'
import ContentBox from '../components/searchPageComponents/ContentBox'
import { Container, Grid } from '@chakra-ui/react'

const SearchPage = () => {
  return (
    <Container minH='container.height' minW={{ base: 'container.width', xl: '75vw' }}>
      <Grid templateColumns='repeat(2, 47.5%)' gap='5%'>
        <FilterBox />
        <ContentBox />
      </Grid>
    </Container>
  )
}

export default SearchPage
