import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import admincontext from '../context/admincontext'

export default function Assign() {

    const context = useContext(admincontext)
    const { userList, fetchUser } = context
    const [errors, setErrors] = useState({ nameError: "", taskError: "", ttError: "" })

    useEffect(() => {
        fetchUser()

    }, [])

    const Navigate = useNavigate()

    const [tsk, setTsk] = useState({ name: "", task: "", tasktype: "" })

    const validate = (nm, tk, tt) => {

        let validation = true


        if (nm === "" && tk === "" && tt === "") {

            validation = false

            setErrors({ nameError: "field is required!", taskError: "field is required!", ttError: "field is required!" })
        }
        else if (nm === "") {

            validation = false

            setErrors({ nameError: "field is required!" })
        }
        else if (tk === "") {

            validation = false

            setErrors({ taskError: "field is required!" })
        }

        else if (tt === "") {

            validation = false

            setErrors({ ttError: "field is required!" })
        }



        return validation
    }

    const handleEvent = async (e) => {
        e.preventDefault()

        const res = validate(tsk.name, tsk.task, tsk.tasktype)
        if (res === true) {
            const response = await fetch("http://localhost:5000/api/assign", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({ name: tsk.name, task: tsk.task, tasktype: tsk.tasktype })

            });
            const value = await response.json()
            if (value.success === true) {
                Navigate('/')
            }
        }


    }

    const onChange = (e) => {
        setTsk({ ...tsk, [e.target.name]: e.target.value })
    }
    return (
        <div className='assign'>
            <form onSubmit={handleEvent}>
                <div className="mb-3">
                    <select class="form-select" aria-label="Default select example" id='name' onChange={onChange} name='name' value={tsk.name}>
                        <option selected>Select user</option>

                        {userList.map((user) => {
                            return <option value={user.name}>{user.name}</option>
                        })}
                    </select>
                    <p style={{ color: 'red', fontWeight: '600', fontSize: '14px' }}>{errors.nameError}</p>

                </div>

                <div className="mb-3">
                    <label for="task" className="form-label">Task*</label>
                    <input type="text" className="form-control" value={tsk.task} onChange={onChange} id="task" name='task' aria-describedby="emailHelp" />
                    <p style={{ color: 'red', fontWeight: '600', fontSize: '14px' }}>{errors.taskError}</p>

                </div>
                <div className="mb-3">
                    <select class="form-select" aria-label="Default select example" id='tasktype' name='tasktype' value={tsk.tasktype} onChange={onChange}>
                        <option selected>Task type</option>
                        <option value="Pending">Pending</option>
                        <option value="Done">Done</option>

                    </select>
                    <p style={{ color: 'red', fontWeight: '600', fontSize: '14px' }}>{errors.ttError}</p>

                </div>

                <button type="submit" className="btn btn-primary">Assign</button>
            </form>
        </div>
    )
}
