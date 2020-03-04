import axios from 'axios'; 
import { RESULTS_SPINNER, RECIPE_SPINNER, FETCH_RECIPES, FETCH_RECIPE } from './types'; 


// this is for showing a spinner while a request is fetching 
function showResultsSpinner () {
  return {
    type: RESULTS_SPINNER
  }
}

function showRecipeSpinner () {
  return {
    type: RECIPE_SPINNER
  }
}

export function fetchRecipes (query) { 

  return async function (dispatch) {
    dispatch(showResultsSpinner())

    const results = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${query}`); 

    dispatch({ type: FETCH_RECIPES, payload: results.data.recipes }) 
  }
}


export function selectRecipe (id) {

  return async function (dispatch) {
    dispatch(showRecipeSpinner())

    const result = await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`); 

    dispatch({ type: FETCH_RECIPE, payload: result.data.recipe }) 
  }
}

export function nextPage () {
  return {
    type: "NEXT_PAGE"
  }
}

export function prevPage () {
  return {
    type: 'PREVIOUS_PAGE'
  }
}








