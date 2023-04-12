import React, { useEffect, useState } from 'react'
import UserRow from './UserRow';
import url from '../../components/url';

const AllUser = () => {

  const [users ,setUsers]= useState([])
  const [isLoading ,setIsLoading] = useState(true)

 useEffect (()=>{
  fetch(`${url}/allUsers`, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(data=>{
      console.log(data)
      setUsers(data)
      setIsLoading(false)
    })
 },[])

  if (isLoading) return <p className='min-h-[600px] text-2xl'>Loading...</p>

  return (
    <div className='min-h-[600px]'>
    

      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead className='border-[1px] border-blue-700'>
            <tr >
              <th className='border-[1px] border-blue-700 text-center text-base'>User Email</th>
              <th className='border-[1px] border-blue-700 text-center text-base'>User Name</th>
              <th className='border-[1px] border-blue-700 text-center text-base'>Password</th>


            </tr>
          </thead>
          <tbody>

            {users.map(user => <UserRow key={user._id} user={user} ></UserRow>)}

          </tbody>
        </table>
      </div>
    </div>

  )
}


export default AllUser