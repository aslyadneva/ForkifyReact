import axios from 'axios'; 

//This is a list of action creators 
//Each creator dispatches it's own action to the store


export function fetchRecipes (query) { 

  // because a function is being returned, it will pass through redux thunk and therefore  
  // dispatch can be called manually to the reducer once the async request is complete 
  // if whatever is dispatched is also a function, it will go through redux thunk again 
  // and complete something else 
  return async function (dispatch) {
    dispatch(requestPosts ())

    const results = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${query}`); 

    dispatch({ type: 'FETCH_RECIPES', payload: results.data.recipes }) 
  }
}

export function requestPosts () {
  return {
    type: 'REQUEST_RECIPES'
  }
}

export function selectRecipe (id) {

  return async function (dispatch) {

    const result = await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`); 

    dispatch({ type: 'FETCH_RECIPE', payload: result.data.recipe }) 
  }
}









