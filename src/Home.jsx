import React from 'react'
import img from './Banner/img8.jpg'
import Contact from './Contact'

const Home = () => {
    return (
        <div className=''>
            <div id='Home' className='pt-20  '>
               <img src={img} className='w-full h-full' alt="" />
            </div>

            <div id='AboutUs' className='pt-24  '>
              <Contact />
            </div>
            <div id='Contact' className='pt-24  '>
                <div className='h-72 w-full  flex justify-center items-center'>
                    <p className='text-3xl italic font-bold'>This is  Contact div</p>
                </div>
            </div>

        </div>
    )
}

export default Home