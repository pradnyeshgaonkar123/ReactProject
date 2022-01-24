
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    myContainer: {


        backgroundColor: "black",

    },
    myDiv: {
        marginLeft: "5%",
        marginRight: "5%",
    },
    myTableHeader: {
        color: "red",
    },
    navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
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

export function ShowStudent() {


    let studAr = useSelector((store) => store.StudReducer);

    const classes = useStyles();
    return (
        <div className={classes.myDiv}>

            {/* <section style={{ 'textAlign': 'center' }}>
                
                <input style={{ 'height': '30px', 'textAlign': 'center', 'marginBottom': '10px' }} type="text" placeholder="Search by name here" onChange={(event)=>{setSid(event.target.value);}}/>
                <Button style={{ border: '1px solid ', backgroundColor: 'blue', color: 'white' }} variant="outlined">
                                        <NavLink style={{ textDecoration: 'none' }} to={`/student/search/${sid}`}><span style={{ textDecoration: 'none', color: 'white' }}>SEARCH</span></NavLink>
                                    </Button>
                
            </section> */}
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
                        {studAr.map((student) => (
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
            </TableContainer>
        </div>
    );
}
