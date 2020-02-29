import React, { Component } from 'react'; 
import { connect } from 'react-redux';

import ResultsList from './ResultsList'; 

function Spinner () {
  return (
    <div className='loader'>
      <svg>
        <use href="img/icons.svg#icon-cw"></use>
      </svg>
    </div>
  ); 
}

class SearchResults extends Component {
  render() { 
    const { recipes, isLoading } = this.props; 
    return (
      <div className="results"> 
        {isLoading ? <Spinner /> : null}
        {recipes ? <ResultsList/> : null}
      </div>
    ); 
  }
}

const mapStateToProps = state => {
  return { recipes: state.results.recipes, isLoading: state.results.isLoading }
}

export default connect (mapStateToProps)(SearchResults); 