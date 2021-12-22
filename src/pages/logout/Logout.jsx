import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { user_logout } from '../../store/action/admin';

const Logout = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(user_logout(() => {
           props.history.push('/');
       }));
    }, []);
    return (
        <div>
            
        </div>
    )
}

export default Logout
