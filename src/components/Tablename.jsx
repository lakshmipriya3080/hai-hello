import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tablename = () => {
    var pname=[{name:"lakshmi",age:20,place:"chalakudy"},
    {name:"priya",age:19,place:"koratty"},
    {name:"lachu",age:18,place:"thrissur"}]
  return (
   <TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Place</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {pname.map((value,index)=>{
                return<TableRow>
                    <TableCell key={index}>{value.name}</TableCell>
                    <TableCell key={index}>{value.age}</TableCell>
                    <TableCell key={index}>{value.place}</TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>
   </TableContainer>
  )
}

export default Tablename
