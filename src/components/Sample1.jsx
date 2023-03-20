import { Typography } from '@mui/material'
import React from 'react'

const Sample1 = () => {
    var pname=["lakshmi","priya","lachu"]
  return (
    <div>
       <ul>{pname.map((value,index)=>{
        return<li key={index}>{value}</li>
       })}
       </ul>
      
    </div>
  )
}

export default Sample1
