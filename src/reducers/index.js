import { combineReducers } from 'redux'; 
import { reducer as formReducer } from 'redux-form'; 
import recipesReducer from './recipesReducer'; 
import selectedRecipeReducer from './selectedRecipeReducer'; 


export default combineReducers({
  form: formReducer, 
  results: recipesReducer, 
  selectedRecipe: selectedRecipeReducer
}); 