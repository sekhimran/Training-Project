import {ADD_STUDENT, EDIT_STUDENT, FEATCH_STUDENT, FEATCH_USER_DETSILS, REMOVE_STUDENT, TEACHER_REGISTER, USER_LOGOUT, USER_SIGNIN} from "../action/actionType"

export const initialState = {
    teachers : localStorage.getItem("teachers") ?JSON.parse(localStorage.getItem("teachers")):[],
    loginerr : null,token:localStorage.getItem("token"),
    userDetails:null,
    students:localStorage.getItem("students") ?JSON.parse(localStorage.getItem("students")):[],
}


export const adminReducer =(state = initialState,action) => {
    switch(action.type){
        case TEACHER_REGISTER:{
            let teacher = [...state.teachers]
            action.data["id"] = teacher.length+1
            teacher.push(action.data)
            localStorage.setItem("teachers",JSON.stringify(teacher))
   
           return {
               ...state,
               teachers:teacher
           }
        }      

        case FEATCH_USER_DETSILS:{
            const teacher = state.teachers
            const user = teacher.find((i) => i.email==localStorage.getItem("token"))
   
           return {
               ...state,
               userDetails:user
           }
        }

        case ADD_STUDENT:{
            const students = state.students
            action.data["id"] = students.length+1
            students.push(action.data)
            localStorage.setItem("students",JSON.stringify(students))
   
           return {
               ...state,
               students:students
           }
        }

        case FEATCH_STUDENT:{
            const students = [...state.students]
   
           return {
               ...state,students
              
           }
        }

        case USER_LOGOUT:{              
           return {
               ...state,
               teachers : localStorage.getItem("teachers") ?JSON.parse(localStorage.getItem("teachers")):[],
               loginerr : null,token:localStorage.getItem("token"),
               userDetails:null,
               students:[],              
           }
        }

        case REMOVE_STUDENT:{  
            const newrecords = [...state.students];  
            newrecords.splice(action.data, 1);   
            localStorage.setItem("students",JSON.stringify(newrecords))    
            return {
                ...state,
                students:newrecords                        
            }
         }

        //  case EDIT_STUDENT:{                   
               
        //     return {
        //         ...state,                                
        //     }
        //  }


         case EDIT_STUDENT:{
            console.log("Hello")
            const students = state.students
            for(let i in students){
                console.log(students[i].id==action.data.id)
                if(students[i].id==action.data.id){
                    console.log(students[i])
                    students[i]={id:action.data.id,...action.data.values}
                    console.log(students[i])
                }
            }            
            localStorage.setItem("students",JSON.stringify(students))
   
           return {
               ...state,
               students:students
           }
        }


        

        default :
        return {
            ...state
        }
    }
}

