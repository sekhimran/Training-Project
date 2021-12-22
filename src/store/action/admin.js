import { TEACHER_REGISTER,SIGNIN_FAILD,SIGNIN_SUCCESFULL,USER_SIGNIN, FEATCH_USER_DETSILS, ADD_STUDENT, FEATCH_STUDENT, USER_LOGOUT, REMOVE_STUDENT, EDIT_STUDENT, FEATCH_STUDENT_DETSIL } from "./actionType"


export const register_teacher = (value,success,failure) => {
    return dispatch => {       
               dispatch({
                   type:TEACHER_REGISTER,
                   data: value
               })
               success && success()             
    }
}

export const userSignin = (values,success,failure) => {
    return dispatch => {
        const teacher = JSON.parse(localStorage.getItem("teachers"))
        const user = teacher.find((i) => i.email==values.email)
        if(user != undefined){
            if(user.password==values.password){
               localStorage.setItem("token", values.email)
                dispatch({
                    type:SIGNIN_SUCCESFULL                  
                })
                success && success()
            }
            else{
                dispatch({
                    type:SIGNIN_FAILD                  
                })
                failure({password:"Invalid Login Details"})
            }
        }
        else{
            dispatch({
                type:SIGNIN_FAILD                  
            })
            failure({password:"Invalid Login Details"})
        }
    }
}

export const featchUserDetails = (success,failure) => {
    return dispatch => {
        dispatch({
            type:FEATCH_USER_DETSILS,
        })
        success && success()
    }
}

export const add_student = (value,success,failure) => {
    return dispatch => {       
               dispatch({
                   type:ADD_STUDENT,
                   data: value
               })
               success() && success()             
    }
}

export const featchStudent = (success,failure) => {
    return dispatch => {       
               dispatch({
                   type:FEATCH_STUDENT,
               })
               success() && success()             
    }
}

export const user_logout = (success) => {
    return dispatch => { 
        localStorage.removeItem("token")      
               dispatch({
                   type:USER_LOGOUT,                   
               })
               success() && success()             
    }
}


export const remove_student = (id,success) => {
    return dispatch => {             
               dispatch({
                   type:REMOVE_STUDENT,
                   data:id                 
               })
               success() && success()             
    }
}

export const feath_student_detail = (id,success) => {
    return dispatch => {    
        const students = JSON.parse(localStorage.getItem("students"))
        const student = students.find((i) => i.id==id)         
               dispatch({
                   type:FEATCH_STUDENT_DETSIL,                                 
               })
               success(student) && success(student)             
    }
}

export const edit_student_detail = (id,values,success) => {
    return dispatch => {    
        console.log("values ", values);
               dispatch({
                   type:EDIT_STUDENT,
                   data:{
                    values:values,
                    id:id
                   }
               })
               success() && success()             
    }
}
