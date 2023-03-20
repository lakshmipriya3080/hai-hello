import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [cnt,setCnt]=useState(0);
    const increment=()=>{
        setCnt(++cnt);
    }
    const decrement=()=>{
        setCnt(--cnt);
    }
  return (
    <div>
        <Typography variant="h2">{cnt}</Typography>
        <br></br>
        <Button variant="contained" onClick={decrement}>-</Button>
        <Button variant="contained" onClick={increment}>+</Button>
      
    </div>
  )
}

export default Counter
