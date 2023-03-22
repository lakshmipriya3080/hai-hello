import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Read = () => {
    var [students,setstudents]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/students")
        .then(response=>{
            console.log(response.data)
            setstudents(students=response.data)
        })
        .catch(err=>console.log(err))
    })
    const deleteStudent=(id)=>{
        console.log("delete clicked"+id);
        axios.delete("http://localhost:3005/students/"+id)
        .then(response=>{
            alert("deleted")
            Window.location.reload(false)
        })
    }
  return (
    <div>
        <Typography>Welcome to my app</Typography>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Grade</TableCell>
                        <TableCell>DELETE</TableCell>
                        <TableCell>UPDATE</TableCell>
                        </TableRow>
                </TableHead>
                <TableBody>
                    {students.map((value,index)=>{
                        return<TableRow>
                            <TableCell>{value.id}</TableCell>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.grade}</TableCell>
                            <TableCell><Button variant='contained' color='error' onClick={()=>deleteStudent(value.id)}>DELETE</Button></TableCell>
                            <TableCell><Button variant='contained' color='secondary'>UPDATE</Button></TableCell>
                        </TableRow>
                    })}
                </TableBody>
            
               

            </Table>
        </TableContainer>
      
    </div>
  )
}

export default Read
