import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Form = () => {
    var[students,setstudents]=useState({
        id:"",
        name:"",
        Grade:""
    })
    const handleChange=(e)=>{
        const{name,value}=e.target
        setstudents({...students,[name]:value})
        console.log(students)
    }
    const saveData=()=>{
        console.log("Button clicked")
        axios.post("http://localhost:3005/students",students)
        .then(response=>{
            alert("successfully added")
        })
        .catch(error=>{
            alert("Failed")
        })
    }
  return (
    <div>
      <Typography>Add Students</Typography>
      <TextField label='id' variant='outlined' name='id' value={students.id} onChange={handleChange}></TextField><br></br>
      <TextField label='name' variant='outlined'name='name' value={students.name} onChange={handleChange}></TextField><br></br>
      <TextField label='Grade' variant='outlined'name='Grade' value={students.Grade} onChange={handleChange}></TextField><br></br>
      <Button variant='contained' color='success' type='submit' onClick={saveData}>SUBMIT</Button>
    </div>
  )
}

export default Form
