import React, { useEffect, useState } from 'react'
import img from '../assets/img8.jpg'
import img2 from '../assets/ban.png'

import { AiFillStar } from 'react-icons/ai'

import Contact from '../Contact'
import url from '../components/url'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'

const Home = () => {

const [user] = useAuthState(auth)

    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`${url}/review`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
                setIsLoading(false)
            })
    }, [])


    const icon = <p className='text-orange-500'><AiFillStar /></p>
    return (
        <div className=''>
            <div id='Home' className='md:pt-10 pt-10'>
                <img className=' h-screen w-full md:block hidden' src={img} alt="" />
                <img className=' h-screen w-full block md:hidden' src={img2} alt="" />
            </div>
            <div id='scenario' className='pt-24 md:px-10 px-4'>
                <h1 className='text-3xl font-bold mb-4 text-center'>The Most Heart Touching Site In Bangladesh</h1>
                <div className=' w-full  md:flex justify-between mt-10 border-[1px] border-blue-600 rounded-lg overflow-hidden'>
                    <div className='md:w-1/2'>
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e2/f8/43/longest-sea-beach-in.jpg?w=700&h=-1&s=1" alt="" />
                    </div>
                    <div className='md:w-1/2 px-4'>
                        <p className='text-3xl  font-bold'>Cox Bazar </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                    </div>
                </div>


                <div className='w-full md:flex justify-between mt-10 border-[1px] border-blue-600 rounded-lg overflow-hidden'>
                    <div className='md:w-1/2'>
                        <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQyQNZRk6G64rRIWzV4YusXMCcVC4KmW3TQ&usqp=CAU" alt="" />
                    </div>
                    <div className='md:w-1/2 px-4  order-first'>
                        <p className='text-3xl  font-bold'>Lawachara forest 2</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                    </div>

                </div>
                {/* third  img*/}

                <div className=' w-full  md:flex justify-between mt-10 border-[1px] border-blue-600 rounded-lg overflow-hidden'>
                    <div className='md:w-1/2'>
                        <img className='w-full h-full' src="https://upload.wikimedia.org/wikipedia/commons/3/37/Kuakata_beach.jpg" alt="" />
                    </div>
                    <div className='md:w-1/2 px-4 '>
                        <p className='text-3xl  font-bold'>Cox Bazar </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                    </div>
                </div>

                {/* fourth */}

                <div className=' w-full  md:flex justify-between mt-10 border-[1px] border-blue-600 rounded-lg overflow-hidden'>
                    <div className='md:w-1/2'>
                        <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQyQNZRk6G64rRIWzV4YusXMCcVC4KmW3TQ&usqp=CAU" alt="" />
                    </div>
                    <div className='md:w-1/2 px-4 order-first'>
                        <p className='text-3xl  font-bold'>Lawachara forest </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                    </div>

                </div>
                {/* fifth */}

                <div className=' w-full  md:flex justify-between mt-10 border-[1px] border-blue-600 rounded-lg overflow-hidden'>
                    <div className='md:w-1/2'>
                        <img className='w-full h-full' src="https://upload.wikimedia.org/wikipedia/commons/3/37/Kuakata_beach.jpg" alt="" />
                    </div>
                    <div className='md:w-1/2 px-4 '>
                        <p className='text-3xl  font-bold'>Cox Bazar </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam hic et saepe obcaecati quod exercitationem eligendi. Molestiae ad consectetur, iusto voluptas placeat nam temporibus aut quas deserunt architecto corrupti?</p>
                    </div>
                </div>
            </div>

            {/* About Us */}

            <div id='AboutUs' className='pt-24 pr-10 pl-12 flex justify-center text-justify'>
                <div className=''>

                    <p className='text-3xl font-bold mb-4 text-center'>WHY WE ARE EXEPTIONAL</p>
                    <ol className='list-decimal	mt-4'>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis sapiente iusto perspiciatis vitae, corporis odit veritatis odio dignissimos perferendis fugit fugiat architecto, cumque, voluptatum ea repellendus similique accusamus libero!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis sapiente iusto perspiciatis vitae, corporis odit veritatis odio dignissimos perferendis fugit fugiat architecto, cumque, voluptatum ea repellendus similique accusamus libero!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis sapiente iusto perspiciatis vitae, corporis odit veritatis odio dignissimos perferendis fugit fugiat architecto, cumque, voluptatum ea repellendus similique accusamus libero!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis sapiente iusto perspiciatis vitae, corporis odit veritatis odio dignissimos perferendis fugit fugiat architecto, cumque, voluptatum ea repellendus similique accusamus libero!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis sapiente iusto perspiciatis vitae, corporis odit veritatis odio dignissimos perferendis fugit fugiat architecto, cumque, voluptatum ea repellendus similique accusamus libero!</li>
                    </ol>
                </div>
            </div>
            <div id='Contact' className='pt-24'>
                <Contact />
            </div>

            <div id='review' className='md:px-16 px-4 pt-24'>

                <h1 className='text-3xl font-bold mb-4 text-center'>Testmonials</h1>

               {isLoading ? <p className='text-center text-2xl mt-10'>Loading...</p>: <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-16'>
                    {reviews.map((r, index) => <div key={r._id} className='md:flex items-center p-2 border-2 border-blue-600 mt-2 rounded-lg md:h-44'>
                        <div className='md:w-2/12 w-full mr-4 '>
                            <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" className='h-12 w-12 rounded-full border-blue-600 border-2' alt="" srcset="" />
                        </div>
                        <div className='md:w-10/12 pr-4'>
                            <div className='flex justify-between'>
                                <p className='text-xl font-bold'> {r.name} </p>
                                <div>
                                    {r.ratings == 1 && <div className='flex'>{icon}</div>}
                                    {r.ratings == 2 && <div className='flex'>{icon}{icon}</div>}
                                    {r.ratings == 3 && <div className='flex'>{icon}{icon}</div>}
                                    {r.ratings == 4 && <div className='flex'>{icon}{icon}{icon}{icon}</div>}
                                    {r.ratings == 5 && <div className='flex'>{icon}{icon}{icon}{icon}{icon}</div>}
                                </div>
                            </div>



                            <p className='text-justify'>{r.review.slice(0, 100)}{r.review.length > 101 && '.....'}</p>
                            {r.review.length > 101 && <div>
                                <p className='mt-2'>
                                    <label htmlFor={`${index}`} className='border-[.5px] border-blue-600 rounded p-1 font-light'>Read More</label>
                                </p>
                                <input type="checkbox" id={`${index}`} className="modal-toggle" />
                                <div className="modal md:mt-0 m-0">
                                    <div className="modal-box m-0  p-2">
                                        <div className='text-end m-0'>
                                            <label className="border-2 border-blue-600 rounded-full  px-1 font-bold" htmlFor={`${index}`} >x</label></div>
                                        <div className="modal-action p-0 flex justify-start">
                                            <div className=' w-full  pb-4 px-4'>
                                                <p className='text-justify'>{r.review}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>}
                        </div>
                    </div>)}
                </div>}
            </div>
        </div>
    )
}

export default Home