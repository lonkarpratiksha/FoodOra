import { Button, Select } from '@mui/material'
import React from 'react'
import {Typography, TextField, InputLabel, FormControl,  MenuItem} from '@mui/material'
import {  Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

const initialValues={
    fullName:"",
    email:"",
    password:"",
    role:"ROLE_CUSTOMER"
}

const RegisterForm = () => {
    const navigate=useNavigate();

    const handleSubmit=(values)=>{
        console.log("form value",values)
    }
    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Register
            </Typography>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <Field
                        as={TextField}
                        name="fullName"
                        label="Full name"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Field
                        as={TextField}
                        name="email"
                        label="Email"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        />
                    <Field
                        as={TextField}
                        name="password"
                        label="Password"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="password"
                        />
                        <Field
                            fullWidth
                            margin="normal"
                            as={Select}
                            labelId="role-simple-select-label"
                            id="role-simple-select"
                            name="role"
                            //value={age}
                            // label="Role"
                            //onChange={handleChange}
                        >
                            <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                            <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                        </Field>
                <Button sx={{mt:2, padding:"1rem"}} fullWidth type='submit' variant='contained'>Register</Button>
                </Form>
            </Formik>

            <Typography variant='body2' align='center' sx={{mt:3}}>
                If have an account already?
                <Button size='small' onClick={()=>navigate("/account/login")}> Login</Button>
            </Typography>
        </div>
    )
}

export default RegisterForm
