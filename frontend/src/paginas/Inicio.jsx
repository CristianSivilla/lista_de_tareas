import { Container, VStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const Inicio = () => {
  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={30}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, #ff0080ff, #7928CA)"}
          bgClip={"text"}
          textAlign={"center"}
        >

          Lista de Tareas Pendientes
        </Text>

        <Text fontSize='xl' textAlign={"center"} fontWeight="bold" color="gray.500">
          No hay ninguna tarea pendiente{" "}
          <Link to={"/crear"}>
            <Text as='span' color='purple.500' _hover={{ textDecoration: "underline" }}>
              Crear Tarea
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  )
}

export default Inicio
