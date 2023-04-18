import { Card } from '@chakra-ui/react'
import React from 'react'

const ResultCard = () => {
  const handleClick = () => {
    return console.warn('card clicked!')
  }
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      h='20vh'
      cursor='pointer'
      boxShadow='rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;'
      transition='all 0.3s ease-in-out'
      _hover={{ transform: 'translateY(-10px)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px' }}
      onClick={handleClick}
    >
      hi
    </Card>
  )
}

export default ResultCard
