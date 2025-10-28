import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import './App.css'
import { Route } from 'react-router-dom'
import CrearTarea from './paginas/CrearTarea';
import Inicio from './paginas/Inicio';
import Navbar from './components/ui/Navbar';



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
