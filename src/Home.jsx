import React from 'react'
import img from './assets/img8.jpg'


import Contact from './Contact'

const Home = () => {
    return (
        <div className=''>
            <div id='Home' className='pt-20'>
                <img className='h-full w-full' src={img} alt="" />
            </div>
            <div id='scenario' className='pt-24 px-10'>
                <h1 className='text-center font-bold text-3xl'>The Most Heart Touching Site In Bangladesh</h1>
                <div className=' w-full  flex justify-between mt-10 border-[1px] border-black'>
                    <div className='w-1/2'>
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e2/f8/43/longest-sea-beach-in.jpg?w=700&h=-1&s=1" alt="" />
                    </div>
                    <div className='w-1/2 px-4'>
                        <p className='text-3xl italic font-bold'>Cox Bazar </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                    </div>
                </div>


                <div className=' w-full  flex justify-between mt-10 border-[1px] border-black'>

                    <div className='w-1/2 px-4'>
                        <p className='text-3xl italic font-bold'>Lawachara forest </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                    </div>
                    <div className='w-1/2'>
                        <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQyQNZRk6G64rRIWzV4YusXMCcVC4KmW3TQ&usqp=CAU" alt="" />
                    </div>
                </div>

                <div className=' w-full  flex justify-between mt-10 border-[1px] border-black'>
                    <div className='w-1/2'>
                        <img className='w-full h-full' src="https://upload.wikimedia.org/wikipedia/commons/3/37/Kuakata_beach.jpg" alt="" />
                    </div>
                    <div className='w-1/2 px-4'>
                        <p className='text-3xl italic font-bold'>Cox Bazar </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                    </div>
                </div>

            </div>

            <div id='AboutUs' className='pt-24 px-10'>
                <div className=''>

                    <p className='text-3xl font-bold mb-4 text-center'>WHY WE ARE EXEPTIONAL</p>
                    <ul>
                        <li>01.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis sapiente iusto perspiciatis vitae, corporis odit veritatis odio dignissimos perferendis fugit fugiat architecto, cumque, voluptatum ea repellendus similique accusamus libero!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis sapiente iusto perspiciatis vitae, corporis odit veritatis odio dignissimos perferendis fugit fugiat architecto, cumque, voluptatum ea repellendus similique accusamus libero!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis sapiente iusto perspiciatis vitae, corporis odit veritatis odio dignissimos perferendis fugit fugiat architecto, cumque, voluptatum ea repellendus similique accusamus libero!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis sapiente iusto perspiciatis vitae, corporis odit veritatis odio dignissimos perferendis fugit fugiat architecto, cumque, voluptatum ea repellendus similique accusamus libero!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis sapiente iusto perspiciatis vitae, corporis odit veritatis odio dignissimos perferendis fugit fugiat architecto, cumque, voluptatum ea repellendus similique accusamus libero!</li>
                    </ul>
                </div>
            </div>
            <div id='Contact' className='pt-24'>
                <Contact />
            </div>
        </div>
    )
}

export default Home