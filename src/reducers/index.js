import { combineReducers } from 'redux'; 
import { reducer as formReducer } from 'redux-form'; 
import recipesReducer from './recipesReducer'; 
import pageReducer from './pageReducer'; 
import selectedRecipeReducer from './selectedRecipeReducer'; 
import shoppingListReducer from './shoppingListReducer'; 


export default combineReducers({
  form: formReducer, 
  results: recipesReducer,  
  currentPage: pageReducer,
  selectedRecipe: selectedRecipeReducer, 
  shoppingList: shoppingListReducer
}); 