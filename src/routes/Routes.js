import React, { useLayoutEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

/** Private Routes */
import PrivateRoute from './PrivateRoute';

/** Public Routes */
import PublicRoute from './PublicRoute';

// import { withSuspense } from '../hoc/withSuspense';
// import TransparentLoader from '../components/loaders/TransparentLoader';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';
import PageNotFound from '../pages/error-pages/PageNotFound';

import Register from '../components/Register';
import Signin from '../pages/signin/Signin';
import Myaccount from '../pages/myaccount/Myaccount';
import { useDispatch, useSelector } from 'react-redux';
import Logout from '../pages/logout/Logout';


// const Dashboard = withSuspense(React.lazy(() => import(/* webpackChunkName: "Dashboard" */ '../pages/Dashboard')) ,<TransparentLoader/>);

const AuthRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('token');
    return (
        <Route
            {...rest}
            render={(props) =>
                !token ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/account",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};



const Routes = () => {
    /**
     * ? Scrolls to the top of page if any submission occurs or layout change occurs
     */

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
const dispatch = useDispatch();
const token = localStorage.getItem('token');
    return (
        <Switch>
            <AuthRoute exact path="/register" component={Register} />
            <AuthRoute exact path="/signin" component={Signin} />
            <PrivateRoute exact path="/account" component={Myaccount} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/logout" component={Logout} />

            <Route exact path="/404" component={PageNotFound} />
            <Route exact path="/" render={() => {                                
                      if (token) {
                        return <Redirect to="/account" />
                    }
                    return <Redirect to="/signin" />
                    }} />
            <Route from="*" render={() => <Redirect to="/404" />} />
        </Switch>
    );
};

export default withRouter(Routes); //withRouter HOC will let us use props for location and history
