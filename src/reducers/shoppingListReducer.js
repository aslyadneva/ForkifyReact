import { ADD_TO_SHOPPING, DELETE_ITEM } from '../actions/types'; 

export default function(state = [], action) {
  switch (action.type) {

    case ADD_TO_SHOPPING: 
      const newList = [...action.payload.newIngredients, ...action.payload.prevState]
      return newList
    
    case DELETE_ITEM:
      const newListItems = action.payload.shoppingList.filter(item => item.id !== action.payload.id); 
      return newListItems

    default: 
      return state; 
  }   
}