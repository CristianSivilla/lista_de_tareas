import { Box } from '@chakra-ui/react'
import './App.css'
import CrearTarea from './paginas/CrearTarea'
import Inicio from './paginas/Inicio'
import Navbar from './components/ui/Navbar'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Box minH="100vh">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/crear" element={<CrearTarea />} />
      </Routes>
    </Box>
  )
}

export default App
