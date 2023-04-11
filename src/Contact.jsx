
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaAddressCard } from 'react-icons/fa';

import { AiFillTwitterCircle } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_k01mvfs', 'template_z1n5dkt', form.current, 'jpahS1JZakvGMUb-U')
      .then((result) => {
        alert("Your emai sent successfully to the website admin")
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='pt-20  '>



      {/* location */}


      <div className=' md:pt-16 pt-8 bg-color-first'>
        <h2 className="  sm:text-4xl text-2xl text-center font-bold mb-4 px-4">CONTACT US</h2>


        <div className='md:flex justify-between  md:p-10 px-4 bg-color-first'>
          <div className=" md:h-[450px] h-[200px] relative md:w-3/4 border-[1px] border-blue-600 " >
            {/* <Image className='md:p-4 p-1' src='' alt='' fill /> */}
          </div>

          <div className='md:w-1/4 md:pl-4 grid grid-cols-1 gap-y-4 md:mt-0 mt-2'>
            <div className='border-[1px] border-blue-500 md:flex items-center p-4'>

              <div className='bg-blue-600 p-4'>
                <AiOutlinePhone className='text-xl text-white' />
              </div>
              <div className='md:ml-10'>
                <h1 className='text-2xl font-bold mb-2'>Phone</h1>
                <p></p>
            

              </div>
            </div>
            <div className='border-[1px] border-blue-500 md:flex items-center p-4'>

              <div className='bg-blue-600 p-4'>
                <AiOutlineMail className='text-xl text-white' />
              </div>
              <div className='md:ml-10'>
                <h1 className='text-2xl font-bold mb-2'>Email</h1>
                <p></p>


              </div>
            </div>

            <div className='border-[1px] border-blue-500 md:flex items-center p-4'>

              <div className='bg-blue-600 p-4'>
                <FaAddressCard className='text-xl text-white' />
              </div>
              <div className='md:ml-10'>
                <h1 className='text-2xl font-bold mb-2'>Adress</h1>

              

              </div>
            </div>

          </div>

        </div>
      </div>
      {/* contact form */}
      <div className='py-20'>

        <h1 className='text-center text-3xl font-bold'>GET IN TOUCH</h1>
        <div className='sm:flex justify-center '>
          <div className=''>
            <div className="w-full mt-10 ">
              <form ref={form} onSubmit={sendEmail} className='md:w-[1200px] px-4'>
                <div className='md:flex'>
                  <input className="mt-2 w-full rounded-md p-2 border-2 border-black  md:mr-4" name="user_name" placeholder='Name' type="text" /><br />
                  <input className="mt-2 w-full rounded-md p-2 border-2 border-black  md:mx-2" name="user_email" placeholder='Email' type="email" /><br />
                  <input className="mt-2 w-full rounded-md p-2 border-2 border-black  md:ml-4" name="phone" placeholder='Phone' type="phone" /><br />
                </div>
                <textarea className="mt-6 w-full rounded-md p-2 border-2 border-black " name="message" placeholder='Massage' cols={30} rows={10}></textarea><br />

                <input className="mt-2 w-full rounded-md p-2 border-2 border-black hover:bg-color-second  hover:text-blue-600 font-bold text-2xl" type="submit" value='SUBMIT' />
                <br />
              </form>
            </div>



            <div className="w-full mx-4 mt-16">
              <div className='flex'>
                <svg width='16px'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" /></svg> <p className='ml-6'>Chetona IT Park</p>
              </div>

              <div className='flex '>
                <svg width='16px'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg> <p className='ml-6'> Chetona IT Park@gmail.com </p>
              </div>
              {/* <div className='w-full h-[2px] bg-white my-10'></div> */}

              <div className='flex justify-center md:h-44 h-24  rounded items-center border-2 border-white mr-8 mt-4 py-10 '>
                <a href="https://www.facebook.com/profile.php?id=100062570633013" target="_blank" rel="noreferrer">
                  <BsFacebook className='text-6xl mx-3  hover:text-blue-600 hover:bg-white rounded-full px-1 duration-500' />
                </a>


                <BsLinkedin className='text-6xl mx-3' />


                <AiFillTwitterCircle className='text-7xl mx-3' />

              </div>

              {/* <div className='w-full h-[2px] bg-white mt-10'></div> */}
              <h1 className='text-center mt-2'>© Chetona IT Park | Software Development Company</h1>
            </div>
          </div>
        </div>
      </div>











    </div>
  )
}

export default Contact