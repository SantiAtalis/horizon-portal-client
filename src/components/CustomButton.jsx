import React from 'react'
import { Button } from '@chakra-ui/react'

const CustomButton = ({ Icon = null }) => (
  <Button leftIcon={Icon ?? Icon} bg='secondary.100' color='primary.100' _hover={{ backgroundColor: 'blue', color: 'primary.100' }}>Click me</Button>
)

export default CustomButton
