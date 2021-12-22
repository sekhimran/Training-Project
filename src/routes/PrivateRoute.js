import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

//export default ({ component: Component, ...rest }) => {
	// const { isloggedin } = useSelector((state) => state.auth);

// 	return (
// 		<Route
// 			{...rest}
// 			render={(props) => {
// 				return localStorage.getItem('token') ? (
// 					<Component {...props} />
// 				) : (
// 					<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
// 				);
// 			}}
// 		/>
// 	);
// };


const PrivateRoute = ({ component: Component, ...rest }) => {
	const token = localStorage.getItem('token');  
    return (
        <Route
            {...rest}
            render={(props) =>
                token ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};
export default PrivateRoute