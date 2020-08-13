import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({ //combined reducer call
    auth: authReducer,
    form: reduxForm
})