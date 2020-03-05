import React, { Fragment } from 'react'; 
import { connect } from 'react-redux';
import Result from './Result'; 
import Pagination from './Pagination'; 
import {limitRecipeTitle} from '../helpers/helper'; 

const ResultsList = ({ recipes, currentPage }) => {

  const totalPosts = recipes.length; 
  const resultsPerPage = 10; 
  const numOfPages = Math.ceil(totalPosts/resultsPerPage); 

  function getCurrentPosts (recipes) {
      let indexOfLastPost = currentPage * resultsPerPage; //10 
      let indexOfFirstPost = indexOfLastPost - resultsPerPage; //0 
      return recipes.slice(indexOfFirstPost, indexOfLastPost);
  }

  let currentPosts = getCurrentPosts(recipes).map(result => {
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
      <Fragment>
        <ul className="results__list">
          {currentPosts}
        </ul>  
        <Pagination pages={numOfPages}/>
      </Fragment>
    );
}

const mapStateToProps = state => {
  return { recipes: state.results.recipes, currentPage: state.currentPage }
}

export default connect (mapStateToProps)(ResultsList); 
