


export const showStudens=()=>{
    return {
        type:'SHOWSTUDENTS'
    }
}



export const addStudents=(student)=>{
    return {
        type:'ADDSTUDENTS',
        payload:student
    }
}

export const delStudent=(studentId)=>{
    return{
        type:'DELETESTUDENTS',
        payload:studentId
    }
}


export const updateStudent=(student)=>{
    return{
        type:'UPDATESTUDENTS',
        payload:student,
    }
}


export const searchStudent=(studentId)=>{
    return{
        type:'SEARCHSTUDENTS',
        payload:studentId,
    }
}