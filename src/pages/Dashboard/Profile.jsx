import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { useState } from 'react'
import { useEffect } from 'react'
import url from '../../components/url'

const Profile = () => {
  const [currentUser] = useAuthState(auth)
  const [user ,setUser]= useState({})
  const [isLoading ,setIsLoading] = useState(true)

 useEffect (()=>{
  fetch(`${url}/currentUser/${currentUser.email}`, {
    method: 'GET',
    headers:{
      'content-type': 'application/json',
    }
  })
    .then(res => res.json())
    .then(data=>{
      console.log(data)
      setUser(data)
      setIsLoading(false)
    })
 },[])

  if (isLoading) return <p className='min-h-[600px]'>Loading</p>
  return (
    <div className=''>
       <p>Name : {user.name}</p>
       <p>Email : {user.email}</p>

    </div>
  )
}

export default Profile