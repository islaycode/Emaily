import React ,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import {connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from '../components/surveys/SurveyNew'

class App extends Component{

    componentDidMount(){
          this.props.fetchUser();
    }
    render(){
    return (
        <div>
            <BrowserRouter>
            <div>
                <Header/> 
                <Route exact path="/" component = {Landing}/>
                <Route  exact path="/surveys" component = {Dashboard}/>
                <div className="container">
                <Route path="/surveys/new" component = {SurveyNew}/>
                </div>
            </div>
            </BrowserRouter>
        </div>
    );
 }
}

export default connect(null,actions)(App); 