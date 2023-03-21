import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const New2 = () => {
    const[submitted,setSubmitted]=useState(false);
    var [Inputname, setInputname] = useState({
        fname: "",

    })
    const inputHandler = (e) => {
        const { name, value } = e.target
        setInputname({ ...Inputname, [name]: value })
    }
    const [validation, setValidation] = useState({
        fname: ""
    })
    const checkValidation = () => {
        let errors = validation;
        if (!Inputname.fname.trim()) {
            errors.fname = "First name is required";
        } else {
            errors.fname = "";
        }
        setValidation(errors);
    }
    useEffect(() => {
        checkValidation();
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmitted(true);
    };
    return (
        <div>
            <form
            id="registrationform"
            onSubmit={handleSubmit}
            >

            <TextField label='First name' name='fname' value={Inputname.fname} onChange={inputHandler} variant="outlined"></TextField>
            <br/>{(validation.fname && submitted)&&<p>{validation.fname}</p>}<br/>
            <Button type="submit" variant="contained">SAVE</Button>
            </form>
             </div>
    )
}

export default New2
