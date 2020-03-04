import { RECIPE_SPINNER, FETCH_RECIPE } from '../actions/types'; 

const initialState = {
  selectedRecipe: null, 
  isRecipeLoading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case RECIPE_SPINNER: 
      return {...initialState, isRecipeLoading: true}

    case FETCH_RECIPE: 
      return {...initialState, selectedRecipe: action.payload}

    default: 
      return state; 
  }   
}