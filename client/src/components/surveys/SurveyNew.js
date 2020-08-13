import React, {Component} from 'react';
import SurveyForm from './SurveyForm';
import { reduxForm } from 'redux-form';
import SurveyFormReview from './SurveyFormReview';

//surveyNew shows surveyForm and surveyreview
class SurveyNew extends Component {
    state = {
        showFormReview: false
    };

    renderContent() {
        if(this.state.showFormReview){
            return <SurveyFormReview
            onCancel = { ()=> this.setState({showFormReview: false})}
            />
        }

        return <SurveyForm 
        onSurveySubmit={() => this.setState({
            showFormReview: true
        })}/>
    }

    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);