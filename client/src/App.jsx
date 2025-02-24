import React, { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import '@mantine/core/styles.css';
import { Route, Routes } from 'react-router-dom';
import LogIn from '../src/Pages/LogIn';
import Register from './Pages/Register';
import Preferences from './Pages/preferences';
import { Toaster, toast } from 'sonner'
//import Home from './Pages/Home';
import ProtectedRoutes from './components/ProtectedRoutes';
import LoadingSpinner from './components/LoadingSpinner';

const Home = lazy(() => import('./Pages/Home'));

const App = () => {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Suspense fallback={<LoadingSpinner/>}>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/preferences' element={<Preferences />}></Route>
          </Route>
          <Route path='/login' element={<LogIn />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
