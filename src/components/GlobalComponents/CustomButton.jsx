import React from 'react'
import { Button } from '@chakra-ui/react'

const CustomButton = ({ Icon = null }) => (
  <Button leftIcon={Icon ?? Icon} bg='secondary.base' color='primary.base' _hover={{ backgroundColor: 'blue', color: 'primary.base' }}>Click me</Button>
)

export default CustomButton
