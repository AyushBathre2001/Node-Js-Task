import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

export default function User() {
    const Navigate = useNavigate()
    const [detail, setDetail] = useState({ name: "", email: "", phone: "" })
    const [errors, setErrors] = useState({ nameError: "", emailError: "", phoneError: "" })

    const validate = (nm, eml, phn) => {

        let validation = true
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


        if (nm === "" && eml === "" && phn === "") {

            validation = false

            setErrors({ nameError: "field is required!", emailError: "field is required!", phoneError: "field is required!" })
        }
        else if (nm === "") {

            validation = false

            setErrors({ nameError: "field is required!" })
        }
        else if (eml === "") {

            validation = false

            setErrors({ emailError: "field is required!" })
        }

        else if (phn === "") {

            validation = false

            setErrors({ phoneError: "field is required!" })
        }

        else if (phn.length < 10 || phn.length > 10) {

            validation = false

            setErrors({ phoneError: "please provide valid phone number!" })
        }
        else if (!eml.match(mailformat)) {
            validation = false
            setErrors({emailError:"invalid email syntax"})
        }

        return validation
    }

    const handleEvent = async (e) => {
        e.preventDefault()

         const res = validate(detail.name, detail.email, detail.phone)
        if (res === true) {
            const response = await fetch("http://localhost:5000/api/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: detail.name, email: detail.email, phone: detail.phone })
            });
            const val = await response.json()
            if(val.success === true){
                Navigate('/assign')
            }
        }
    

    }

    const onChange = (e) => {
        setDetail({ ...detail, [e.target.name]: e.target.value })
    }
    return (
        <div className='user'>
            <form onSubmit={handleEvent}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name*</label>
                    <input type="text" className="form-control" value={detail.name} onChange={onChange} id="name" name='name' aria-describedby="emailHelp" />
                    <p style={{ color: 'red', fontWeight: '600', fontSize: '14px' }}>{errors.nameError}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address*</label>
                    <input type="text" className="form-control" value={detail.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    <p style={{ color: 'red', fontWeight: '600', fontSize: '14px' }}>{errors.emailError}</p>

                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone*</label>
                    <input type="number" className="form-control" value={detail.phone} onChange={onChange} id="phone" name='phone' />
                    <p style={{ color: 'red', fontWeight: '600', fontSize: '14px' }}>{errors.phoneError}</p>

                </div>

                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
        </div>
    )
}
