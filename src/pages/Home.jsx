import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  return (
    <div className="home">
        <Heading my="30px" p="10px">Home</Heading>
        <Text my="30px" p="20">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</Text>
    </div>
  )
}
