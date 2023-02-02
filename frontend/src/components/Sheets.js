
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import admincontext from '../context/admincontext'

export default function Sheets() {

    const context = useContext(admincontext)
    const { userExcel, fetchUser, taskExcel, fetchTask } = context
    const Navigate = useNavigate()
    useEffect(() => {
        fetchTask()
        fetchUser()
    }, [])
    return (
        <div className='sheets'>
            <div className="btt">
                <button onClick={userExcel} className='btn btn-success mx-1'>User sheet</button>
                <button onClick={taskExcel} className='btn btn-success mx-1'>Task sheet</button>

            </div>
            <p>"Click on the button and check your downloads!"</p>
        </div>
    )
}
