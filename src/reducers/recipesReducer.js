import { RESULTS_SPINNER, FETCH_RECIPES } from '../actions/types'; 

const initialState = {
  isLoading: false, 
  recipes: null,  
} 
export default function(state = initialState, action) {
  switch (action.type) {

    case RESULTS_SPINNER: 
      return {...initialState, isLoading: true}

    case FETCH_RECIPES: 
      return {...initialState, recipes: action.payload}

    default: 
      return state; 
  }   
}