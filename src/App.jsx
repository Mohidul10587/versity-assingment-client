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




function App() {

  return (
   
    <div>
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
    </div>
  )
}

export default App
