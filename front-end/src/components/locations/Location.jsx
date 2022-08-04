import React from 'react'
import './Location.css';

const Location = ({item}) => {
  return (
    <tr>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.class}</td>
        <td>{item.status}</td>
        <td>{item.lastView}</td>  
        <div className='location-page'>
          <div className='delete1'>
           <button className="delete-btn1" type='submit'>Delete</button>
          </div>
        </div>
    </tr>
  )
}

export default Location