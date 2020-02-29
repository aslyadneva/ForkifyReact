export default function(state = 1, action) {
  switch (action.type) {

    case 'NEXT_PAGE': 
      return state +1

    case 'PREVIOUS_PAGE': 
      return state -1 

    default: 
      return state; 
  }   
}