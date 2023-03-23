import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const EditForm = (props) => {
    var[students,setstudents]=useState(props.data)
    console.log("add page props"+props.data)
    const handleChange=(e)=>{
        const{name,value}=e.target
        setstudents({...students,[name]:value})
        console.log(students)
    }
    const saveData=()=>{
        console.log("Button clicked")
        if(props.method=="post"){
        axios.post("http://localhost:3005/students",students)
        .then(response=>{
            alert("successfully added")
        })
        .catch(error=>{
            alert("Failed")
        })
      }else if(props.method=="put"){
        axios.put("http://localhost:3005/students/"+students.id,students)
        .then((response)=>{
          console.log("put data"+response.data)
          alert("success")
          window.location.reload(false);
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    }
  return (
    <div>
      <Typography>Add Students</Typography>
      <TextField label='id' variant='outlined' name='id' value={students.id} onChange={handleChange}></TextField><br></br>
      <TextField label='name' variant='outlined'name='name' value={students.name} onChange={handleChange}></TextField><br></br>
      <TextField label='Grade' variant='outlined'name='grade' value={students.grade} onChange={handleChange}></TextField><br></br>
      <Button variant='contained' color='success' type='submit' onClick={saveData}>SUBMIT</Button>
    </div>
  )
}

export default EditForm
