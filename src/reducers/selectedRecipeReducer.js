import { RECIPE_SPINNER, FETCH_RECIPE, CHANGE_SERVING } from '../actions/types'; 
import { parseIngredients } from '../helpers/helper'; 

const initialState = {
  image: null, 
  title: null, 
  ingredients: null, 
  source: null,
  author: null, 
  servings: 4,
  time: null, 
  isRecipeLoading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case RECIPE_SPINNER: 
      return {...initialState, isRecipeLoading: true}

    case FETCH_RECIPE: 
      const selectedRecipe = action.payload; 

      function calcTime (ingredients) {
        return Math.ceil(ingredients.length/3) *15
      }

      return {
        ...initialState, 
        image: selectedRecipe.image_url, 
        title: selectedRecipe.title, 
        ingredients: parseIngredients(selectedRecipe.ingredients), 
        source: selectedRecipe.source_url,
        author: selectedRecipe.publisher, 
        time: calcTime(selectedRecipe.ingredients),
        servings: 4, 
      }

    case CHANGE_SERVING: 
      
      const newServings = action.payload.type === 'decrease' ? action.payload.selectedRecipe.servings -1 : action.payload.selectedRecipe.servings +1;

      const newIngredients = action.payload.selectedRecipe.ingredients.map(ingredient => {
        ingredient.count *= (newServings/action.payload.selectedRecipe.servings); 
        return ingredient
      })
    
      return {
        ...action.payload.selectedRecipe, servings: newServings, ingredients: newIngredients
      }

    default: 
      return state; 
  }   
}