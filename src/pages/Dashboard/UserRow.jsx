
import React from 'react'



const UserRow = ({ user }) => {
  const { email, name,password } = user;

  // const makeAdmin = () => {

  //   fetch(`https://mohid-shop.onrender.com/user/admin/${email}`, {
  //     method: 'PUT',
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem('accessToken')}`
  //     }
  //   }).then(res => {
  //     if (res.status === 403){
  //       toast.error('Failed to make an error')
  //     }
  //     return res.json()})
  //     .then(data => {
  //       if (data.modifiedCount > 0) {
  //         toast.success('Successfully added user as admin')
  //         refetch()
  //       }

  //     })
  // }
  // const handleDelete = (id) => {

  //   fetch(`https://mohid-shop.onrender.com/deleteUser/${id}`, {
  //     method: 'DELETE',

  //   }).then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       if (data.deletedCount) {
         
  //         toast.success(`Deleted`)
  //         refetch()
  //       }
  //     })
  // }

  return (
    <tr className='border-[1px] border-blue-700'>
      <td className='border-[1px] border-blue-700'>{email}</td>
      <td className='border-[1px] border-blue-700'>{name}</td>
      <td className='border-[1px] border-blue-700'>{password}</td>
    </tr>
  )
}

export default UserRow