
"use client"; // this is a client component
// import { signOut } from "firebase/auth";
import { useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { RxCross2 } from 'react-icons/rx'
import { VscThreeBars } from 'react-icons/vsc'
import { Link, useNavigate } from "react-router-dom";
// import auth from "../authentication/firebase.init";



const Navbar = () => {
  const [dropdown, setDropdown] = useState(true)
  const [toggleCross, setToogleCross] = useState(false)



  return (
    // <div className="md:pb-24 pb-14">
    <div>

      <nav className="" >
        <div className="shadow-gray-500 shadow-md  bg-color-first  flex justify-between  md:h-14 h-10 md:px-12 px-2 md:py-10 py-6 items-center fixed w-full bg-green-600  z-30">
          <Link to='/'>  <div className="text-white md:text-3xl text-2xl italic">
            <p className="font-bold">Travel Agency Bangladesh</p>
          </div></Link>

          {/* menu for md device */}
          <div className="md:flex hidden" >

          <a href="#Home"> <p className="mx-5 text-white hover:text-gray-50 duration-700 border-2   border-white-white rounded-md px-3 w-28 text-center">Home</p></a>

          <a href="#AboutUs">  <p className="mx-5 text-white hover:text-gray-50 duration-700 border-2   border-white-white rounded-md px-3 w-28 text-center">About Us</p></a>

          <a href="#Contact">  <p className="mx-5 text-white hover:text-gray-50 duration-700 border-2   border-white-white rounded-md px-3 w-28 text-center">Contact</p></a>



          </div>

          <VscThreeBars className={toggleCross ? "hidden bg-white text-black rounded-full p-1 text-4xl" : "md:hidden  bg-white text-black rounded-full p-1 text-4xl"}
            onClick={() => {

              setDropdown(!dropdown)
              setToogleCross(true)

            }} />
          <RxCross2 className={toggleCross ? "md:hidden bg-white text-black rounded-full p-1 text-4xl" : "hidden  bg-white text-black rounded-full p-1 text-4xl"}
            onClick={() => {

              setDropdown(true)
              setToogleCross(false)

            }} />

          <div onClick={() => {
            setDropdown(true)
            setToogleCross(false)
          }} className={dropdown ? 'rounded-b  bg-green-600 md:hidden fixed  top-12 w-64   z-30 -left-64 transition-all duration-700' : 'md:hidden fixed , top-12 w-64 left-0 transition-all duration-700 rounded-b bg-green-600'} >

            <Link to='/'>  <p className=" border-2 border-white  px-2 py-2 mx-2 bg-white rounded my-3 ">Home</p></Link>

          </div>
        </div>

      </nav>

    </div>
  );
};

export default Navbar;