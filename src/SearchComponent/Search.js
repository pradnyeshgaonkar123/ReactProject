
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    myContainer: {

        marginBottom: "5%",
        backgroundColor: "black",

    },
    myDiv: {
        marginLeft: "5%",
        marginRight: "5%",
    },
    imputBlock:{
        height:"35px",
        width:"200px",
        borderRadius:"5px",
        textAlign:"center",
    },
    myTableHeader: {
        color: "red",
    },
    navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
    },
    searchBlock:{
        textAlign:"center",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

export function Search() {
    let studArr = useSelector((reducer) => reducer.StudReducer);
    let[flag, setFlag] = useState(true);
    console.log(studArr);
    let [id, setId] = useState();
    let [curArr, setCurArr] = useState([]);

    console.log("id", id);
    function searchStudent(stId) {
        let stdnt = studArr.find(student => student.studentId === parseInt(stId));
        if(stdnt!=null){
            setFlag(false);
        }
        else{
            setFlag(true);
        }
        
        return stdnt;
    }

    function handleSubmit(e) {
        e.preventDefault()
        setCurArr([searchStudent(id)])
    }

    const classes = useStyles();
    return (

        <>
<div className={classes.myDiv}>
    

<div className={classes.searchBlock}>
                <h1>Search By Student Id</h1>
                <form className='searchForm' onSubmit={handleSubmit}>
                    <input className={classes.imputBlock} placeholder='search by id here'  type={"number"} value={id} onChange={(e) => setId(parseInt(e.target.value))} required />
                    <Button type='submit' variant='contained' color='primary'>SEARCH</Button>
                </form>
                {

                    (flag===true)?
                    <p style={{'color':'red', 'fontSize':'20px', 'background':'white', 'padding':'5px'}}>No match found</p>
                
                :
                <TableContainer component={Paper} className={classes.myContainer}>

                    <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                        <TableHead style={{ background: "black", color: "white" }}>
                            <TableRow >
                                <TableCell align="center" style={{ 'color': 'white' }}>ID</TableCell>
                                <TableCell align="center" style={{ 'color': 'white' }}>NAME</TableCell>
                                <TableCell align="center" style={{ 'color': 'white' }}>DEPARTMENT</TableCell>
                                <TableCell align="center" style={{ 'color': 'white' }}>YEAR</TableCell>
                                <TableCell align="center" colSpan='2' style={{ 'color': 'white' }}>ACTIONS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {

                                curArr.map((student) => (
                                    <TableRow
                                        key={student.studentId}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center" scope="row">
                                            {student.studentId}
                                        </TableCell>
                                        <TableCell align="center">{student.studeName}</TableCell>
                                        <TableCell align="center">{student.studDepart}</TableCell>
                                        <TableCell align="center">{student.studYear}</TableCell>

                                        <TableCell align='right'><Button align="center" variant="contained" color="success">
                                            <NavLink style={{ textDecoration: 'none' }} to={`/student/update/${student.studentId}`}><span style={{ color: "white" }}>UPDARE</span></NavLink>
                                        </Button></TableCell>
                                        <TableCell align='left'>
                                            <Button style={{ border: '1px solid red', backgroundColor: 'darkred', color: 'white' }} variant="outlined" startIcon={<DeleteIcon />}>
                                                <NavLink style={{ textDecoration: 'none' }} to={`/student/delete/${student.studentId}`}><span style={{ textDecoration: 'none', color: 'white' }}>DELETE</span></NavLink>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            
                        
                        </TableBody>
                    </Table>
                </TableContainer>}
            </div>
</div>
        </>
    );
}
