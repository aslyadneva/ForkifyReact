import React, {Component} from 'react'; 
import { Field, reduxForm } from 'redux-form'; 
import { connect } from 'react-redux'; 
import { fetchRecipes } from '../actions'; 

 
class Form extends Component {
 
  onSubmit = (formValues) =>{
    
    this.props.fetchRecipes(formValues.search);
    formValues.search= ''; 
  }

  renderInput (formProps) { 
    return (
      <input 
        {...formProps.input}
        type = "text" 
        className = "search__field" 
        placeholder = "Search over 1,000,000 recipes..."
        autoComplete="off"
      />
    ); 
  }

  render () {
    return (
      <form className="search" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="search" component={this.renderInput}/>
        
          <button className="btn search__btn" >
            <svg className="search__icon">
              <use href="img/icons.svg#icon-magnifying-glass"></use>
            </svg>
            <span>Search</span>
          </button> 
      </form>
    ); 
  }
}; 

const formWrapped = reduxForm({form: 'Search Recipe'})(Form)

export default connect (null, { fetchRecipes })(formWrapped)