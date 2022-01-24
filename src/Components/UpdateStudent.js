
import React, { useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import { Student } from "../StudentData/Student";

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from "react-router-dom";

import { updateStudent } from '../actions/StudActions';
export const UpdateStudent = () => {

    const paperStyle = { padding: '30px 20px', width: 400, margin: "0px auto" }
    const headerStyle = { margin: 2, fontSize: "25px" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnStyle = { textAlign: "center", marginLeft: "40%", marginTop: "10px" }

    // let [myData, setMyData] = useState([]);

    // ================================
    let studArr = useSelector((reducer) => reducer.StudReducer);
    let { id } = useParams();
    console.log(id);
    let dispatch = useDispatch();


    function searchStud(stId) {
        let found = studArr.find(s => s.studentId === parseInt(stId));
        console.log("Found : " + found);
        return found;
    }



    let student = searchStud(id);



    const [stud, setStudent] = useState(new Student(
        parseInt(student.studentId),
        student.studeName,
        student.studDepart,
        student.studYear
    ));

    // const [student, setStudent] = useState(new Student());
    // const [stud, setStud] = useState(new Student());
    // useEffect(()=>{
    //     let m = new StudentImpl();
    //     setStudent(updateStudent(parseInt(id)));
    //     console.log("jkhkj",student);
    // }, []);
    // ================================




    const [flag, setFlag] = useState(true);


    // const setDetails = (e) => {
    //     setStudent({ ...stud, [e.target.name]: e.target.value });
    // }


    function submitForm(e) {
        dispatch(updateStudent(stud));
        e.preventDefault();


        console.log("===============1============");
        console.log(studArr);
        console.log(stud);


        console.log("===============2============");
        setFlag(false);

    }


    return (
        <div>{flag ?

            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <AddCircleOutlineOutlinedIcon />
                        </Avatar>
                        <h2 style={headerStyle}>Update Student</h2>
                        <Typography variant='caption' gutterBottom>Please fill this form to update student !</Typography>
                    </Grid>
                    <form onSubmit={submitForm}>
                        <TextField fullWidth label='ID' inputProps={{ readOnly: true, }} placeholder="Enter your ID" onChange={(e) => setStudent({ ...stud, ["studentName"]: e.target.value })} value={stud.studentId} />
                        <TextField fullWidth label='Name' placeholder="Enter your Name" value={stud.studeName} onChange={(e) => setStudent({ ...stud, ["studeName"]: e.target.value })} />

                        <TextField fullWidth label='Department' placeholder="Enter your department" value={stud.studDepart} onChange={(e) => setStudent({ ...stud, ["studDepart"]: e.target.value })} />
                        <TextField fullWidth label='Year' placeholder="Enter your Standard" onChange={(e) => setStudent({ ...stud, ["studYear"]: e.target.value })} value={stud.studYear} />

                        <Button type='submit' style={btnStyle} variant='contained' color='primary'>UPDATE</Button>

                    </form>
                </Paper>
            </Grid>

            : <Navigate to="/students/showall"></Navigate>}

        </div>
    )
}












