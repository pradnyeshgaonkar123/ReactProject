
import {Student} from './Student';



export class StudentImpl{
    studArray = new Set();

   

    constructor(){
        this.studArray.add(new Student(101, 'Pradnyesh', 'IT', 'SE'));
        this.studArray.add(new Student(102, 'Ramesh', 'IT', 'SE'));
        
    }
    
    getAllStudents(){
       
        return [...this.studArray];
    }

  
    addStudent(stud){      //stud: new data
        console.log("*************in add()*************");
       let newStud = new Student(parseInt(stud.studentId), stud.studeName, stud.studDepart, stud.studYear);
        this.studArray.add(newStud);
        console.log(newStud);
        return [...this.studArray];

    }

    // updateStudent(stdId){      //stud: new data
    //     console.log("*************in update()*************");
    //     let student = this.searchStudent(stdId);
        

    //     // let newStud = new Student(parseInt(stud.studentId), stud.studeName, stud.studDepart, stud.studYear);
    //     // this.studArray.add(student);
    //     return student;

    // }
    updateStudent(newStudentData){
        console.log(newStudentData);
        let stud = new Student(parseInt(newStudentData.studentId), newStudentData.studeName, newStudentData.studDepart, newStudentData.studYear);
        let id = newStudentData.studentId;
        console.log(typeof(id));
        
        let originalStudent = this.searchStudent(id);
        console.log("originalStudent",originalStudent);
        console.log("stud",stud);
        // this.studArray.delete(originalStudent);
        
        // let originalStudent = this.studArray.find(student => student.studentId == newStudentData.studentId)
        // let index = this.studArray.indexOf(originalStudent);

        console.log("wabnt tp deltred");
        this.studArray.delete(originalStudent);
        console.log("deltred");

        console.log("after deletion", this.studArray);
        this.studArray.add(stud);
        console.log("after addition", this.studArray);
        // if(newStudentData.studentName!="") originalStudent.Name = newStudentData.studentName;
        // if(newStudentData.studentDept!="") originalStudent.Dept = newStudentData.studentDept;
        // if(newStudentData.studentYear!="") originalStudent.Year = newStudentData.studentYear;
        
        // this.studArray[index] = originalStudent;
        return [...this.studArray];
    }


    searchStudent(stdId){
        console.log("*************in search()*************");
      
        return [...this.studArray].find((student)=>student.studentId===stdId);;
       
        
    }

    deleteStudent(stdId){
        console.log("*************in delete()*************");
        let student = this.searchStudent(stdId);
        this.studArray.delete(student);
        console.log("deleted");
        console.log(this.studArray);
       
        return [...this.studArray];
    }
}