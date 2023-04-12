import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import RequireAuth from './pages/authentication/RequireAuth';
import Login from './pages/authentication/Login';
import SignUp from './pages/authentication/SingUp';




function App() {

  return (
   
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />


        <Route path='/profile' element={<RequireAuth> <Profile /></RequireAuth>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
