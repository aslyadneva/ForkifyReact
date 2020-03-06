import React, {Component} from 'react';
// import { connect } from 'react-redux';

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
 
 
  
        {/* <div class="copyright">
           &copy; by Jonas Schmedtmann. Powered by
          <a href="http://food2fork.com" target="_blank" class="link">Food2Fork.com</a>.
        </div> */}
     </div>
   );
  }
  
}




export default App;
