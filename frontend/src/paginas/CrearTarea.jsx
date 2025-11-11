import React from 'react'
import { Box, Image, Heading, Text, Switch, useColorModeValue, IconButton } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { DeleteIcon } from '@chakra-ui/icons'


const TareaCard = ({ tarea }) => {
  const textColor = useColorModeValue("gray.800", "white")

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

        <Text fontWeight="bold" fontSize="md" color={textColor} mb={4}>
          {tarea.descripcion}
        </Text>

        <Box display="flex" alignItems="center" mt={2}>
          <Text mr={2}>Completada:</Text>
          <Switch 
            colorScheme="green" 
            isChecked={tarea.completado} 
            isReadOnly 
          />
        </Box>
        <IconButton icon={<EditIcon/>} colorScheme='blue'/>
        <IconButton icon={<DeleteIcon/>} colorScheme='blue'/>
      </Box>
    </Box>
  )
}

export default TareaCard
