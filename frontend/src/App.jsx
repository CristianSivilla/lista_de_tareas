import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import './App.css'
import CrearTarea from './paginas/CrearTarea';
import Inicio from './paginas/Inicio';
import Nabvar from './components/ui/Navbar';
import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'



function App() {

  return (
  <Box minH={"100vh"}>
  <Nabvar />   
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/" element={<CrearTarea />} />
  </Routes>
</Box>

  )
}

export default App
