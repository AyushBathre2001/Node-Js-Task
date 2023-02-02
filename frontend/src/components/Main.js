import React  from 'react'
import { useNavigate } from 'react-router-dom'


export default function Main() {
   
    const Navigate = useNavigate()
 
   
  return (
    <div className='main'>
        <h1>Admin Dash</h1>
      <div className="choice">
        <button onClick={()=>{Navigate('/create')}} className='btn btn-primary'>Add User</button>
        <button onClick={()=>{Navigate('/assign')}} className='btn btn-dark mx-3'>Assign Task</button>
        <button onClick={()=>{Navigate('/sheets')}} className='btn btn-success'>Excel Sheet</button>
      </div>
    </div>
  )
}
