import React from 'react'
import Navbar from './components/Navbar'
import '@mantine/core/styles.css';
import { Route,Routes } from 'react-router-dom';
import  LogIn  from '../src/Pages/LogIn';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<LogIn/>}></Route>
      </Routes>
    </div>
  )
}

export default App
