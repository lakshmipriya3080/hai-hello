import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EditForm from './EditForm'

const Read = () => {
    var [update, setUpdate] = useState(false)
    var [singleValue, setSingleValue] = useState([])
    var [students, setstudents] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3005/students")
            .then(response => {
                console.log(response.data)
                setstudents(students = response.data)
            })
            .catch(err => console.log(err))
    }, [])
    const deleteStudent = (id) => {
        console.log("delete clicked" + id);
        axios.delete("http://localhost:3005/students/" + id)
            .then(response => {
                alert("deleted")
                Window.location.reload(false)
            })
    }
    const updateval = (value) => {
        setSingleValue(value);
        setUpdate(true);
    }
    var finalJSX = <TableContainer>
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
                {students.map((value, index) => {
                    return <TableRow>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.grade}</TableCell>
                        <TableCell><Button variant='text' color='error' onClick={() => deleteStudent(value.id)}>DELETE</Button></TableCell>
                        <TableCell><Button variant='text' color='secondary' onClick={() => updateval(value)}>UPDATE</Button></TableCell>
                    </TableRow>
                })}
            </TableBody>


        </Table>
    </TableContainer>
    if (update)
        finalJSX = <EditForm data={singleValue} method="put" />

    return (
        <div>
            {finalJSX}

        </div>
    )
}

export default Read
