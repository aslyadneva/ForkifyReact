const initialState = {
  isLoading: false, 
  recipes: null, 
}
export default function(state = initialState, action) {
  switch (action.type) {

    case 'REQUEST_RECIPES': 
      return {...initialState, isLoading: true}

    case 'FETCH_RECIPES': 
      return {...initialState, isLoading: false, recipes: action.payload}

    default: 
      return state; 
  }   
}