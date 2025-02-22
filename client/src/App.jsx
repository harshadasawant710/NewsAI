import React from 'react'
import Navbar from './components/Navbar'
import '@mantine/core/styles.css';
import { Route,Routes } from 'react-router-dom';
import  LogIn  from '../src/Pages/LogIn';
import Register from './Pages/Register';
import Preferences from './Pages/preferences';
import { Toaster, toast } from 'sonner'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Toaster />

      <Preferences/>
      <Routes>
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </div>
  )
}

export default App
