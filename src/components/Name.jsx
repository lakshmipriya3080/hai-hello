import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Name = () => {
    var [fname,setfname]=useState("")
    const changeName=(event)=>{
        const{name,value}=event.target;
        setfname(value);

    }
    useEffect(()=>{
        setfname("[Enter name]")
    }, []) 
    
  return (
    <div>
        <Typography variant="h4">My Name is {fname}</Typography>
        <TextField label="Enter name" onChange={(e)=>changeName(e)} variant="outlined"></TextField>
        <br></br>
        <Button variant="contained" color="success">ADD NAME</Button>
      
    </div>
  )
}

export default Name
