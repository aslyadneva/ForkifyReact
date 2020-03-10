import React, {Component} from 'react';

import Header from './components/Header';
import SearchResults from './components/SearchResults'; 
import Recipe from './components/Recipe'; 
import ShoppingList from './components/ShoppingList'; 


class App extends Component {

  render () {  
    return (  
      <div className="container">
         <Header/>
         <SearchResults />
         <Recipe />
         <ShoppingList />
     </div>
   );
  }
  
}



export default App;
