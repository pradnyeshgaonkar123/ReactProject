
import { StudentImpl } from "../StudentData/StudentImpl";

let studImpl = new StudentImpl();

export const StudReducer = (state=[...studImpl.studArray], action)=>{
    switch(action.type){
        case 'SHOWSTUDENTS':{
            state = studImpl.getAllStudents();
            return state;
        }

        case 'DELETESTUDENTS':{
            state = studImpl.deleteStudent(action.payload);
            return state;
        }

        case 'ADDSTUDENTS':{
            state = studImpl.addStudent(action.payload);
            return state;
        }
        case 'UPDATESTUDENTS':{
            state = studImpl.updateStudent(action.payload);
            return state;
        }

        default: return state;
    }
}