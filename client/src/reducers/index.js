import {combineReducers} from 'redux';
import authReducer from './authReducer';

export default combineReducers({ //combined reducer call
    auth: authReducer
})