
"use client"; // this is a client component
import { signOut } from "firebase/auth";
import { useState } from "react";
import React, { useRef } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { RxCross2 } from 'react-icons/rx'
import { VscThreeBars } from 'react-icons/vsc'
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";




const Navbar = () => {
  const [dropdown, setDropdown] = useState(true)
  const [toggleCross, setToogleCross] = useState(false)
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const signedOut = () => {
    signOut(auth);
    navigate('/logIn');
  }


  return (
    // <div className="md:pb-24 pb-14">
    <div>

      <nav className="" >
        <div className="shadow-gray-500 shadow-md  bg-color-first  flex justify-between  md:h-14 h-10 md:px-12 px-2 md:py-10 py-6 items-center fixed w-full bg-blue-800  z-30">
          <Link to='/'>  <div className="text-white md:text-3xl text-xl italic">
            <p className="font-bold">Travel Agency Bangladesh</p>
          </div></Link>

          {/* menu for md device */}
          <div className="md:flex hidden" >
            <a href="/#Home"> <p className="mx-3 text-white hover:text-gray-50 duration-700 border-[1px] w-24  border-blue-800  hover:border-white rounded-md px-2  text-center">Home</p></a>
            <a href="/#scenario">  <p className="mx-3 text-white hover:text-gray-50 duration-700 border-[1px] w-24  border-blue-800  hover:border-white rounded-md px-2  text-center">Scenario</p></a>

            <a href="/#AboutUs">  <p className="mx-3 text-white hover:text-gray-50 duration-700 border-[1px] w-24  border-blue-800  hover:border-white rounded-md px-2  text-center">About Us</p></a>

            <a href="/#Contact">  <p className="mx-3 text-white hover:text-gray-50 duration-700 border-[1px] w-24  border-blue-800  hover:border-white rounded-md px-2  text-center">Contact</p></a>
            {user ? <div className="flex">
              <p className="mx-3 text-white hover:text-gray-50 duration-700 border-[1px] w-24  border-blue-800  hover:border-white rounded-md px-2  text-center" onClick={() => signedOut()}>SignOut</p>
              <Link className="mx-3 text-white hover:text-gray-50 duration-700 border-[1px] w-24  border-blue-800  hover:border-white rounded-md px-2  text-center" to='/dashboard'>Dadhboard</Link>
            </div> : <Link className="mx-3 text-white hover:text-gray-50 duration-700 border-[1px] w-24  border-blue-800  hover:border-white rounded-md px-2  text-center" to='/login'>Login</Link>}




          </div>

          <VscThreeBars className={toggleCross ? "hidden bg-white text-black rounded-full p-1  text-3xl" : "md:hidden  bg-white text-black rounded-full p-1  text-3xl"}
            onClick={() => {

              setDropdown(!dropdown)
              setToogleCross(true)

            }} />
          <RxCross2 className={toggleCross ? "md:hidden bg-white text-black rounded-full p-1  text-3xl" : "hidden  bg-white text-black rounded-full p-1  text-3xl"}
            onClick={() => {

              setDropdown(true)
              setToogleCross(false)

            }} />

          <div onClick={() => {
            setDropdown(true)
            setToogleCross(false)
          }} className={dropdown ? 'rounded-b  bg-blue-600 md:hidden fixed  top-12 w-64   z-30 -left-64 transition-all duration-700' : 'md:hidden fixed , top-12 w-64 left-0 transition-all duration-700 rounded-b bg-blue-600'} >

            <a href='/#Home'>  <p className=" border-2 border-white hover:font-bold px-2 py-2 mx-2 bg-white rounded my-3 ">Home</p></a>
            <a href="/#scenario">  <p className=" border-2 border-white hover:font-bold px-2 py-2 mx-2 bg-white rounded my-3 ">Scenario</p></a>

            <a href="/#AboutUs">  <p className=" border-2 border-white hover:font-bold px-2 py-2 mx-2 bg-white rounded my-3 ">About Us</p></a>

            <a href="/#Contact">  <p className=" border-2 border-white hover:font-bold px-2 py-2 mx-2 bg-white rounded my-3 ">Contact</p></a>
            {user ? <div>
              <p className=" border-2 border-white hover:font-bold px-2 py-2 mx-2 bg-white rounded my-3 " onClick={() => signedOut()}>SignOut</p>
              <Link to='/dashboard'> <p className=" border-2 border-white hover:font-bold px-2 py-2 mx-2 bg-white rounded my-3 ">Dadhboard</p> </Link>
            </div> : <Link  to='/login'><p className=" border-2 border-white hover:font-bold px-2 py-2 mx-2 bg-white rounded my-3 ">Login</p></Link>}


          </div>
        </div>

      </nav>

    </div>
  );
};

export default Navbar;
