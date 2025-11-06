import {
  Heading,
  VStack,
  Container,
  useColorModeValue,
  Input,
  Box,
  Button,
  Switch,
  FormControl,
  FormLabel,
  useToast
} from "@chakra-ui/react";
import React, { useState } from "react";
import { usarAlmacenadoTareas } from "../../almacenado/tarea";

const CrearTarea = () => {
  const [nuevaTarea, setNuevaTarea] = useState({
    nombre: "",
    descripcion: "",
    completado: false,
    imagen: "",
  });

  const toast = useToast(); 
  const { crearTarea } = usarAlmacenadoTareas();

  const handleNuevaTarea = async () => {
    const { success, message } = await crearTarea(nuevaTarea);

    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 6000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Éxito",
        description: message,
        status: "success",
        duration: 6000,
        isClosable: true,
      });
    }

    setNuevaTarea({
      nombre: "",
      descripcion: "",
      completado: false,
      imagen: "",
    });
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mb={8}>
          Crear Nueva Tarea
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder="Nombre de la Tarea"
              name="nombre"
              value={nuevaTarea.nombre}
              onChange={(e) =>
                setNuevaTarea({ ...nuevaTarea, nombre: e.target.value })
              }
            />

            <Input
              placeholder="Descripción de la tarea"
              name="descripcion"
              value={nuevaTarea.descripcion}
              onChange={(e) =>
                setNuevaTarea({ ...nuevaTarea, descripcion: e.target.value })
              }
            />

            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="completado" mb="0">
                ¿Finalizada?
              </FormLabel>
              <Switch
                id="completado"
                colorScheme="green"
                isChecked={nuevaTarea.completado}
                onChange={(e) =>
                  setNuevaTarea({
                    ...nuevaTarea,
                    completado: e.target.checked,
                  })
                }
              />
            </FormControl>

            <Input
              placeholder="Imagen URL"
              name="imagen"
              value={nuevaTarea.imagen}
              onChange={(e) =>
                setNuevaTarea({ ...nuevaTarea, imagen: e.target.value })
              }
            />

            <Button colorScheme="blue" onClick={handleNuevaTarea} w="full">
              Guardar
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CrearTarea;
