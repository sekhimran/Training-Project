import React,{useState} from 'react';
import Navigation from '../../components/navigation/Navigation';

import { Formik, useFormik, Form as FormikForm } from 'formik';
import { Button, Form, Row, Col, } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { add_student, edit_student_detail, featchStudent, feath_student_detail, remove_student } from '../../store/action/admin';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Dashboard = () => {
    const dispatch = useDispatch();
    const students = useSelector(state=>state.admin.students)
    //const [setadd] = React.useState(true)
    React.useEffect(()=>{
        dispatch(featchStudent(()=>{},
        ()=> {}
        ))
    },[])

     

    const [id,setid] = useState(0)

    const [studentDetail,setstudentDetail] = useState({})

    const initialValues = {
        username : studentDetail && studentDetail.username?studentDetail.username:"",
        classname : studentDetail && studentDetail.classname?studentDetail.classname:"",
        phone: studentDetail && studentDetail.phone?studentDetail.phone:"",
        address: studentDetail && studentDetail.address?studentDetail.address:"",
    }

    const removeStudent = (i,e)=>{
        e.preventDefault();
        dispatch(remove_student(i,()=>{
            setstudentDetail({})
            setid(0)
            dispatch(featchStudent(()=>{},
            ()=> {}
            ))
        }))
    }

    const featchstudentDetails = (i,e)=>{
        e.preventDefault();
        
        dispatch(feath_student_detail(i,(student)=>{
            console.log("hello",student)
           setstudentDetail(student)     
           setid(i)      
        }))
    }
    

    const validationSchema = Yup.object({
        username: Yup.string().required("Please enter name"),
        classname: Yup.string().required("Please select class name"),
        phone:Yup.string().required("Please enter phone number"),
        address:Yup.string().required("Please enter address"),
    })

     const onSubmit = (values, action) => {
      
         if(id > 0){
            console.log("values ", values);
            dispatch(edit_student_detail(id,values,()=> {        
               toast.success('Update successfully')
               setstudentDetail({})
               setid(0)
               action.resetForm()
               dispatch(featchStudent(()=>{},
               ()=> {}
               ))           
            },() => {}
            ))    
         }else{
            dispatch(add_student(values,()=> {
                // props.history.push("/");
               toast.success('Add successfully')
               action.resetForm()
               dispatch(featchStudent(()=>{},
               ()=> {}
               ))
                //setadd(true)
            },() => {}
            ))   
         }
                     
     }

   
     console.log("hi",students)

    return (
        <div>
            <Navigation />
            <div className="container">
              <div className='d-flex'>
                  <div className='col-md-5'>
                <div className="form_signin">
                    <Formik
                        initialValues={initialValues}
                        enableReinitialize={true}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {
                            formikProps => (

                                <Form onSubmit={formikProps.handleSubmit}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="" className="position-relative">
                                            <Form.Label>Student Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="username"
                                                className="form-control"
                                                placeholder="Enter student name"
                                                value={formikProps.values.username}
                                                onChange={formikProps.handleChange}
                                                onBlur={formikProps.handleBlur}
                                            />
                                            {formikProps.touched.username && formikProps.errors.username ? (
                                                <span style={{ color: 'red' }}>
                                                    {formikProps.errors.username}
                                                </span>
                                            ) : null}
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="" className="position-relative">
                                            <Form.Label>Class</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="classname"
                                                className="form-control"
                                                placeholder="Enter class name"
                                                value={formikProps.values.classname}
                                                onChange={formikProps.handleChange}
                                                onBlur={formikProps.handleBlur}
                                            />
                                            {formikProps.touched.classname && formikProps.errors.classname ? (
                                                <span style={{ color: 'red' }}>
                                                    {formikProps.errors.classname}
                                                </span>
                                            ) : null}
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="" className="position-relative">
                                            <Form.Label>Contact Number</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="phone"
                                                className="form-control"
                                                placeholder="Enter phone number"
                                                value={formikProps.values.phone}
                                                onChange={formikProps.handleChange}
                                                onBlur={formikProps.handleBlur}
                                            />
                                            {formikProps.touched.phone && formikProps.errors.phone ? (
                                                <span style={{ color: 'red' }}>
                                                    {formikProps.errors.phone}
                                                </span>
                                            ) : null}
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="" className="position-relative">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control
                                                as = "textarea"
                                                name="address"
                                                className="form-control"
                                                placeholder="Enter address"
                                                value={formikProps.values.address}
                                                onChange={formikProps.handleChange}
                                                onBlur={formikProps.handleBlur}
                                            />
                                            {formikProps.touched.address && formikProps.errors.address ? (
                                                <span style={{ color: 'red' }}>
                                                    {formikProps.errors.address}
                                                </span>
                                            ) : null}
                                        </Form.Group>
                                    </Row>
                                    <div className="d-grid gap-2">
                                        <Button type="submit" variant="primary" size="lg">
                                            {id >0?"Update":"Add"}
                                        </Button>
                                        {id >0?
                                         <Button onClick={(e)=>{
                                             formikProps.resetForm()
                                             setstudentDetail({})
                                             setid(0)
                                         }} type="submit" variant="primary" size="lg">
                                         Cancel
                                        </Button>:null
                                        }
                                       
                                       
                                    </div>
                                </Form>

                            )}

                    </Formik>
                    
                </div>
                </div>
                <div className="col-md-7 m-top">                                
                    {
                       students.length > 0 && students.map((s,key)=>(
                        <div className="block">
                            <div className='edit'><a href="javascript:void(0)"  onClick={e=>featchstudentDetails(s.id,e)}><i class="fas fa-edit"></i></a></div>   
                            <div className='delete'><a href="javascript:void(0)" onClick={e=>removeStudent(key,e)}><i class="fas fa-user-times"></i></a></div>   
                            <div className="card paddingS">
                            <p>Name: {s.username}</p>
                           <p>Class Name: {s.classname}</p>
                            <p>Contact Number: {s.phone}</p>
                            <p>Address: {s.address}</p>
                        </div>
                        </div>
                       ))
                   }
                </div> 
               </div>  
            </div>

        </div>
        
    )
}

export default Dashboard
