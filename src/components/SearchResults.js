import React, { Component } from 'react'; 
import Result from './Result'; 
import ResultsButtons from './ResultsButtons'; 
import limitRecipeTitle from '../helpers/helper'; 


function Spinner (props) {
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

function ResultsPages (props) {
  return (
    <div className="results__pages">
      <div>I'm the page buttons component!</div>
      {/* <ResultsButtons /> */}
    </div>
  ); 
}

class SearchResults extends Component {

  render() {
    return (
      <div className="results"> 
        {this.props.spinner ? <Spinner /> : null}
        {this.props.results ? <ResultsList results = {this.props.results}/> : null}
      </div>
    ); 
  }
}

export default SearchResults; 