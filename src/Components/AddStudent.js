import React, { createContext, useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import { Student } from "../StudentData/Student";

import { useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";

import { addStudents } from '../actions/StudActions';


export const AddStudent = () => {

    const paperStyle = { padding: '30px 20px', width: 400, margin: "0px auto" }
    const headerStyle = { margin: 2, fontSize: "25px" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 0 }
    const btnStyle = {textAlign: "center", marginLeft: "40%", marginTop:"10px"}

    // let [myData, setMyData] = useState([]);

    let dispatch = useDispatch();

    //    ====================================

        const[flag, setFlag]=useState(true);
        const [student, setStudent] = useState(new Student());
    
        const setDetails = (e) => {
            setStudent({ ...student, [e.target.name]: e.target.value });
        }
    
    
        function submitForm(e) {
            e.preventDefault();
            
            console.log(student);
            dispatch(addStudents(student));
           
            setFlag(false);
            
        }


    return (
        <div>{flag?
 
            <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Add Student</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to add student !</Typography>
                </Grid>
                <form onSubmit={submitForm}>
                    <TextField fullWidth label='ID' placeholder="Enter your ID" name="studentId" value={student.studentId} onChange={setDetails} />
                    <TextField fullWidth label='Name' placeholder="Enter your Name" name="studeName" value={student.studeName} onChange={setDetails}/>
                    
                    <TextField fullWidth label='Department' placeholder="Enter your department" name="studDepart" value={student.studDepart} onChange={setDetails} />
                    <TextField fullWidth label='Year' placeholder="Enter your Standard" name="studYear" value={student.studYear} onChange={setDetails}  />
                    
                    <Button type='submit' style={btnStyle} variant='contained' color='primary'>ADD</Button>
                </form>
            </Paper>
        </Grid>
        
        :<Navigate to="/students/showall"></Navigate>}
     
        </div>
    )
}











