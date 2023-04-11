import React from 'react'
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className=''>
            <div id='Home' className='pt-20  '>
                <Banner />
            </div>

            <div id='AboutUs' className='pt-24  '>
                <div className='h-72 w-full  flex justify-center items-center'>
                    <p className='text-3xl italic font-bold'>This is about us div</p>
                </div>
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