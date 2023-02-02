import Admincontext from './admincontext';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import writeXlsxFile from 'write-excel-file'

const Adminstate = (props) => {

    const userInitial = []
    const taskInitial = []
    const [userList, setuserList] = useState(userInitial)
    const [taskList,settaskList] = useState(taskInitial)

    const fetchUser = async () => {

        const response = await fetch("http://localhost:5000/api/fetchuser", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            },
        });
        const value = await response.json()
        setuserList(value)
    }

    const fetchTask =  async ()=>{
        const response = await fetch("http://localhost:5000/api/fetchtask", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            },
        });
        const value = await response.json()
        settaskList(value)
    }

    const userExcel = async () => {
        const schema = [
            {
                column: 'Name',
                type: String,
                value: userList => userList.name,
                width:25
            },
            {
                column: 'Email',
                type: String,
                value: userList => userList.email,
                width:35
            },
            {
                column: 'Phone',
                type: String,
                value: userList => userList.phone,
                width:20


            },
        
        ]

        await writeXlsxFile(userList, {
            schema,
            headerStyle: {
                backgroundColor: '#eeeeee',
                fontWeight: 'bold',
                align: 'center'
              },
            
            fileName: 'users.xlsx'
        })
    }

    const taskExcel = async ()=>{
        const schema = [
            {
                column: 'Name',
                type: String,
                value: taskList => taskList.name,
                width:25
            },
            {
                column: 'Task',
                type: String,
                value: taskList => taskList.task,
                width:40
            },
            {
                column: 'Task Type',
                type: String,
                value: taskList => taskList.tasktype,
                width:20


            },
        
        ]

        await writeXlsxFile(taskList, {
            schema,
            headerStyle: {
                backgroundColor: '#eeeeee',
                fontWeight: 'bold',
                align: 'center'
              },
            
            fileName: 'tasks.xlsx'
        })
    }

    return (
        <Admincontext.Provider value={{ userList, fetchUser , fetchTask ,userExcel,taskExcel }}>
            {props.children}
        </Admincontext.Provider>
    )
}

export default Adminstate