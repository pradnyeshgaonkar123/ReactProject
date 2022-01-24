import { Navigate, useParams } from "react-router-dom";
import {delStudent} from '../actions/StudActions';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

function DeleteStudent(){
    let {id} = useParams();
    console.log(id);
    let dispatch = useDispatch();


    useEffect(()=>{
        dispatch(delStudent(parseInt(id)));
    }, []);



    return (
    <>

        <Navigate to="/students/showall"></Navigate>
    </>
    );
}



export default DeleteStudent;