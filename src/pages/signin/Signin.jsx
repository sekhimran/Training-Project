import { Formik, useFormik, Form as FormikForm } from 'formik';
import { useState } from 'react';
import { Button, Form, Row, Col, } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import * as Yup from 'yup';
import Navigation from '../../components/navigation/Navigation';
import { userSignin } from '../../store/action/admin';

const Signin = (props) => {
    const dispatch = useDispatch();

    const [islogin,setislogin] = useState(false)

    const validationSchema = Yup.object({
        email: Yup.string().email().required("Please enter the email"),
        password: Yup.string().min(4, 'Password must have 4 charecters').max(8, 'Password not more than 8 chracters').required('Please enter the password')
    })

    const onSubmit = (values, action) => {
        console.log("values ", values);
        dispatch(userSignin(values,()=> {
            //setislogin(true)
            props.history.push("/account")
        },(err) => {
            action.setErrors(err)
            //setislogin(false)
        }
        ))

    }
    const err = useSelector(state => state.admin.loginerr)

    if(islogin){    
       return <Redirect to="/account"/>
    }

    return (
        <div>
            <Navigation />
            <div className="container">
                <div className="form_signin log">
                <div className='card'>
                    <Formik
                        initialValues={{ email: "", password: "", }}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {
                            formikProps => (

                                <Form onSubmit={formikProps.handleSubmit}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="15" className="position-relative">
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
                                        <Form.Group as={Col} md="15" className="position-relative">
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
                                        <Button type="submit" variant="primary" size="lg">
                                            Login
                                        </Button>
                                        {/* <Link to="/signup" style={{ textDecoration: "none" }} className="text-success">
                                    Don't have an account? Signup
                                </Link> */}
                                    </div>
                                </Form>

                            )}

                       
                    </Formik>
                    {err ? (
                            <span style={{ color: 'red' }}>
                                {err}
                            </span>
                        ) : null}
                </div>
                </div>
            </div>

        </div>

    )
}
export default Signin