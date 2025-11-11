import React from 'react'
import { Box, Image, Heading, useColorModeValue } from '@chakra-ui/react'

const TareaCard = ({ tarea }) => {
    const colorTexto = useColorModeValue("gray.600", "gray.200");
    const fondo = useColorModeValue("white", "gray.800");
    return (
        <Box
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            transition="all 0.3s"
            _hover={{
                transform: "translateY(-5px)",
                boxShadow: "xl"
            }}
            bg={fondo}
        >
            <Image 
                src={tarea.imagen} 
                alt={tarea.nombre} 
                h={48} 
                w="full" 
                objectFit="cover" 
            />

            <Box p={4}>
                <Heading as="h3" size="md" mb={2}>
                    {tarea.nombre}
                </Heading>

                <Text fontWeight="bold" fontSize="xl" color={colorTexto} mb={4}>
                    {tarea.descripcion}
                </Text>

                 <Text fontWeight="bold" fontSize="xl" color={colorTexto} mb={4}>
                    {tarea.descripcion}
                </Text>

            </Box>

        </Box>
    )
}

export default TareaCard
