import React, { Component } from 'react'; 
import Result from './Result'; 
import limitRecipeTitle from '../helpers/helper'; 
import { connect } from 'react-redux';


function Spinner () {
  return (
    <div className='loader'>
      <svg>
        <use href="img/icons.svg#icon-cw"></use>
      </svg>
    </div>
  ); 
}

function ResultsList (props) {

  let resultsArr = props.results.map(result => {
    return (
      <Result
        image = {result.image_url}
        author = {result.publisher}
        name = {limitRecipeTitle(result.title)}
        id = {result.recipe_id}
        key = {result.recipe_id}
      />
    );  
  });
    
    return (
      <ul className="results__list">
        {resultsArr}
      </ul>  
    );
}

class SearchResults extends Component {

  render() { 
    return (
      <div className="results"> 
        {this.props.isLoading ? <Spinner /> : null}
        {this.props.recipes ? <ResultsList results = {this.props.recipes}/> : null}
        {/* {this.props.results ? this.props.pagination : null} */}
      </div>
    ); 
  }
}

const mapStateToProps = state => {
  return { recipes: state.results.recipes, isLoading: state.results.isLoading }
}

export default connect (mapStateToProps)(SearchResults); 