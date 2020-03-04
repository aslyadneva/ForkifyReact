import React, {Component} from 'react';
// import { connect } from 'react-redux';

import Header from './components/Header';
import SearchResults from './components/SearchResults'; 
import Recipe from './components/Recipe'; 
import Shopping from './components/Shopping'; 


class App extends Component {


  render () {
      
    return ( 
      <div className="container">
         <Header/>
         <SearchResults />
         <Recipe />
         <Shopping />
 
 
  
        {/* <div class="copyright">
           &copy; by Jonas Schmedtmann. Powered by
          <a href="http://food2fork.com" target="_blank" class="link">Food2Fork.com</a>.
        </div> */}
     </div>
   );
  }
  
}




export default App;
