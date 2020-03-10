import axios from 'axios'; 
import ls from 'local-storage'; 
import { 
  RESULTS_SPINNER, 
  RECIPE_SPINNER, 
  FETCH_RECIPES, 
  FETCH_RECIPE, 
  CHANGE_SERVING, 
  ADD_TO_SHOPPING, 
  DELETE_ITEM, 
  EDIT_COUNT, 
  LIKE_RECIPE, UNLIKE_RECIPE, LOAD_LOCAL } from './types'; 
 

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

export function changeServings (type) { 

  return function (dispatch, getState) {
    const { selectedRecipe } = getState(); 
    
    dispatch({
      type: CHANGE_SERVING, 
      payload: {selectedRecipe, type}
    }) 
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

export function addToShoppingList (ingredients) {

  return function (dispatch, getState) {
    const { shoppingList } = getState();
    

    dispatch({type: ADD_TO_SHOPPING, payload: {prevState: shoppingList, newIngredients: ingredients}})
  }
}

export function deleteShoppingListItem (id) {
  return function (dispatch, getState){

    const { shoppingList } = getState(); 

    dispatch({type: DELETE_ITEM, payload: { shoppingList: shoppingList, id: id} } )   
  }
}

export function editItemCount (value, id) {
  return function (dispatch, getState){

    const { shoppingList } = getState(); 

    dispatch({type: EDIT_COUNT, payload: { shoppingList: shoppingList, id: id, value: value} } )   
  }
}

export function likeRecipe (recipe) {
  return function (dispatch, getState){

    const { likedRecipes } = getState(); 

    dispatch({type: LIKE_RECIPE, payload: {currentLikes: likedRecipes, recipe: recipe} } ) 
    
    const newState = getState(); 
    
    ls.set('likes', JSON.stringify(newState.likedRecipes));
  }
}

export function unlikeRecipe (recipe) {
  return function (dispatch, getState){

    const { likedRecipes } = getState(); 

    dispatch({type: UNLIKE_RECIPE, payload: {currentLikedRecipes: likedRecipes, unLikedRecipe: recipe} } )   

    const updatedState = getState();
    
    ls.set('likes', JSON.stringify(updatedState.likedRecipes));
  }
}

export function loadLocalStorageLikes (recipesArr) {
  return {
    type: LOAD_LOCAL, 
    payload: recipesArr
  }
}







