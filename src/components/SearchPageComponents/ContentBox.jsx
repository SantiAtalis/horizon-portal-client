import React from 'react'
import ResultCard from '../globalComponents/ResultCard'

import { GridItem, Stack } from '@chakra-ui/react'

const ContentBox = () => {
  return (
    <GridItem>
      <Stack direction={['column']} spacing='2vh' marginTop='5vh' border='1px solid black'>
        {Array(10).fill().map((elem, idx) => <ResultCard key={idx} />)}
      </Stack>
    </GridItem>
  )
}

export default ContentBox
