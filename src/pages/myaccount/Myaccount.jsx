import React from 'react'
import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Navigation from '../../components/navigation/Navigation';
import { featchUserDetails } from '../../store/action/admin';


const Myaccount = (props) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.admin.userDetails)
    React.useEffect(()=> {
        dispatch(featchUserDetails(()=> {},
        ()=> {}
        ))
    })
    console.log(user)
    return (
        <div>
            <Navigation />
            <div className="container">
                <div className='col-md-4'>
                <div className='reg_data'>
                    {user && Object.entries(user).length > 0 ?
                        <h3><span>Name:</span>{user.username}</h3> : null
                    }
                    {user && Object.entries(user).length > 0 ?
                        <h3><span>Email:</span>{user.email}</h3> : null
                    }
                    {user && Object.entries(user).length > 0 ?
                        <h3><span>Phone:</span>{user.phone}</h3> : null
                    }
                    {/* <Link to='/dashboard' className="btn btn-primary">Dashboard</Link> */}
                    </div>
               </div>
            </div>
        </div>
    )
}
export default Myaccount