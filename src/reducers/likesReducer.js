import { LIKE_RECIPE, UNLIKE_RECIPE, LOAD_LOCAL } from '../actions/types'; 

export default function (state = [], action) {
  switch (action.type ) {
    case LIKE_RECIPE: 
      const { currentLikes, recipe } = action.payload;
      return [recipe, ...currentLikes ]

    case UNLIKE_RECIPE: 
      const { currentLikedRecipes, unLikedRecipe } = action.payload;
      const filteredArr = currentLikedRecipes.filter(item => item.title !== unLikedRecipe.title)
      return [...filteredArr ]

    case LOAD_LOCAL: 
      return [...action.payload]

    default:
      return state  
  }
}