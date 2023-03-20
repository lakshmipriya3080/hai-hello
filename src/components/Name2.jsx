import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Name2 = () => {
    var [fname,setfname]=useState("")
    const firstName=(event)=>{
        const{name,value}=event.target;
        setfname(value);
    }
    var [pname,setpname]=useState("")
    const LastName=(Event)=>{
        const{name,value}=Event.target;
        setpname(value);
    }

  return (
    <div>
        <TextField label='First name' onChange={(e)=>firstName(e)} variant="outlined"></TextField>
      <br></br>
      <Typography variant="h4">First name is {fname}</Typography>
      <TextField label='Last name' onChange={(e)=>LastName(e)} variant="outlined"></TextField>
      <br></br>
      <Typography variant="h4">Last name is {pname}</Typography>
    </div>
  )
}

export default Name2
