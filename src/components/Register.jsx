import React,{useState} from 'react';
import { Button, Form, Row, Col, } from 'react-bootstrap';
import { Formik,useFormik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { register_teacher } from '../store/action/admin';
import Navigation from '../components/navigation/Navigation';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

 const Register = (props) => {
    const dispatch = useDispatch();
  
    const [userRegister, setuserRegister] = useState({
        username:"",
        email:"",
        phone:"",
        password:"",
 
    }
    );


const initialValues = {
    username:"",
    email: "",
    phone:"",
    password: "",
}

const onSubmit = (values, action) => {
    console.log("values ", values);
        dispatch(register_teacher(values,()=> {
           
            toast.success('user register successfully')
            //alert('user register successfully')
            props.history.push("/Signin");
        },() => {}
        ))
         
    }
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    
    const validationSchema = Yup.object({
        username: Yup.string().required("Please enter your name"),
        phone: Yup.string()
        .required("Please enter your phone number")
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(10, "to short")
        .max(10, "to long"),
        email: Yup.string().email().required("Please enter the email"),
        password: Yup.string().min(4, 'Password must have 4 charecters').max(8, 'Password not more than 8 chracters').required('Please enter the password')
    })

 //prsntstate.find(c => c.id == entry.pmfbystate.id);


    return (
        <div>
            <Navigation />
            <div className="container">
             <div className="Reg">
               <div className='card'>
                <Formik       
                initialValues = {initialValues}             
                    validationSchema = {validationSchema}
                    onSubmit={onSubmit}
                    >
                    {
                        formikProps => (

                         <Form onSubmit={formikProps.handleSubmit}>
                              <Row className="mb-3">
                                <Form.Group as={Col} md="" className="position-relative">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        placeholder="Enter your name"
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
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={formikProps.values.email}
                                        onChange={formikProps.handleChange}
                                        onBlur={formikProps.handleBlur}
                                    />
                                    {formikProps.touched.email && formikProps.errors.email ? (
                                        <span style={{ color: 'red' }}>
                                            {formikProps.errors.email}
                                        </span>
                                    ) : null}
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="" className="position-relative">
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phone"
                                        className="form-control"
                                        placeholder="Enter your phone number"
                                        value={formikProps.values.phone}
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/\D/g, "");
                                            formikProps.setFieldValue('phone',value)
                                        }}
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
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        value={formikProps.values.password}
                                        onChange={formikProps.handleChange}
                                        onBlur={formikProps.handleBlur}
                                    />
                                    {formikProps.touched.password && formikProps.errors.password ? (
                                        <span style={{ color: 'red' }}>
                                            {formikProps.errors.password}
                                        </span>
                                    ) : null}
                                </Form.Group>
                            </Row>
                            <div className="d-grid gap-2">
                                <Button onClick={formikProps.handleSubmit} type="submit" variant="primary" size="lg">
                                    Register
                                </Button>                               
                            </div>
                     </Form>

                    )}
                     
                </Formik>
              

                    {/* <div>
                         {
                            records.map((currnetElm,key) => {
                                const{ id, username, email, phone, password} = currnetElm;
                                return(
                                    <div className="d-flex featchData" key={id}>
                                        <p className="col-md-3">{username}</p>
                                        <p className="col-md-4">{email}</p>
                                        <p className="col-md-3">{phone}</p>
                                        <p className="col-md-2">{password}</p>

                                        <div className="remove">
                                           <a href="javascript:void(0)" onClick={e=>removeUser(e,key)}>x</a>
                                           </div>
                                    </div>
                                )
                            })
                        }
                    </div> */}
                    </div>
                 </div>
                </div>
        </div>
    )
}
export default Register




















