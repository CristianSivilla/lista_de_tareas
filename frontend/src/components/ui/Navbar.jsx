import React from 'react'
import {
  Container,
  Flex,
  Button,
  Text,
  HStack,
  useColorMode
} from '@chakra-ui/react'
import { PlusSquareIcon } from "@chakra-ui/icons"
import { Link } from 'react-router-dom'
import { IoMoon } from "react-icons/io5"
import { LuSun } from "react-icons/lu"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container maxW="1140px" px={4} bg= {useColorModeValue("gray.100","gray.900")} >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize='22'
          fontWeight='extrabold'
        >
          Welcome to Chakra UI
        </Text>

        <HStack spacing={2} alignItems="center">
          <Link to="/">Lista de Tareas</Link>
          <Link to="/crear">
            <Button>
              <PlusSquareIcon fontSize="20" />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon size={20} /> : <LuSun size={20} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar
