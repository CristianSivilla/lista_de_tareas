import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import './App.css'
import { Route } from 'react-router-dom'

function App() {

  return (
    <Box minH={"100vh"}>
      {}
      <Route path="/" element = {<Inicio/>} />
      <Route path="/" element = {<CrearTarea/>} />


    </Box>
  )
}

export default App
