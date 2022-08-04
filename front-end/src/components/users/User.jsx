import React from 'react'
import './Users.css'

const User = ({item}) => {
  return (
    <tr>
        <td>{item.name}</td>
        <td>{item.role}</td>
        <td>{item.desc}</td>
        <td>{item.enable}</td>
        <td>{item.lastAccess}</td>
        <div className='func-btn'>
          <div className='delete'>
            <button className="delete-btn" type='submit'>Delete</button>
          </div>
        </div>
    </tr>
  )
}

export default User