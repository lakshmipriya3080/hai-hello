import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const New = () => {
    var [Inputname, setInputname] = useState({
        fname: "",
        lname: ""
    })
    const inputHandler = (e) => {
        const { name, value } = e.target
        setInputname({ ...Inputname, [name]: value })
    }
    return (
        <div>
            <TextField label='First name' name='fname' value={Inputname.fname} onChange={inputHandler} variant="outlined"></TextField>
            <br></br>
            <Typography variant="h4">First name is {Inputname.fname}</Typography>
            <TextField label='Last name' name='lname' value={Inputname.lname} onChange={inputHandler} variant="outlined"></TextField>
            <br></br>
            <Typography variant="h4">Last name is {Inputname.lname}</Typography>

        </div>
    )
}

export default New
