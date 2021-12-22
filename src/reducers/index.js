import { combineReducers } from 'redux';
import { adminReducer } from '../store/reducer/admin';

import auth from './auth.reducer';


const reducers = combineReducers({
    auth,
    admin:adminReducer,
});

export default reducers;