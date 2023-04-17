import React from 'react'
import { Box, Heading, Grid, GridItem } from '@chakra-ui/react'

const Header = () => {
  return (
    <Box h='header.size' bg='secondary.100' color='primary.100'>
      <Grid templateColumns='repeat(2, 1fr)' placeItems='center' h='inherit'>
        <GridItem w='100%'>
          <Heading color='primary.100' marginLeft='5vw'>Hi world!</Heading>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Header
