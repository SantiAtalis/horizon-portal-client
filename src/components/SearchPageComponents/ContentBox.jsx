import React, { useId } from 'react'
import ResultCard from '../GlobalComponents/ResultCard'

import { GridItem, Stack } from '@chakra-ui/react'

const ContentBox = () => {
  const id = useId()

  return (
    <GridItem>
      <Stack direction={['column']} spacing='2vh' marginTop='5vh' border='1px solid black'>
        {Array(10).fill().map(elem => <ResultCard key={id} />)}
      </Stack>
    </GridItem>
  )
}

export default ContentBox
