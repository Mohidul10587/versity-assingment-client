import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Dashboard/Profile';
import RequireAuth from './pages/authentication/RequireAuth';
import Login from './pages/authentication/Login';
import SignUp from './pages/authentication/SingUp';
import ResetPassword from './pages/authentication/ResetPassword';
import Dashboard from './pages/Dashboard/Dashboard';
import AllUser from './pages/Dashboard/AllUser';
import MyReview from './pages/Dashboard/MyReview';
import mass from '../src/assets/mas.svg';
import { BsMessenger } from 'react-icons/bs';




function App() {

  return (
   
    <div className='relative'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/resetPassword' element={<ResetPassword />} />
  
        <Route path='dashboard' element={<RequireAuth><Dashboard /> </RequireAuth>}>
              <Route index='profile' element={<Profile></Profile>}></Route>
              <Route path='allUser' element={<AllUser />}></Route>
              <Route path='review' element={<MyReview />}></Route>

            </Route>
      </Routes>
      <Footer />

      <a href="https://www.facebook.com/messages/t/100064805559031" target='_blank_'> <p className='fixed z-50 md:bottom-10 md:right-10 right-2 bottom-2 text-3xl '> <BsMessenger className='bg-white p-1 md:w-16 md:h-16 text-blue-900 rounded-full'  /></p></a>
    </div>
  )
}

export default App
