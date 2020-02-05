const initialState = {
  selectedRecipe: null, 
  isLoading: false
}

export default function(state = initialState, action) {
  switch (action.type) {

    case 'FETCH_RECIPE': 
      return {...initialState, selectedRecipe: action.payload}

    default: 
      return state; 
  }   
}