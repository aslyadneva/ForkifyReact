import React, {Component} from 'react';

import axios from 'axios'; 

import Header from './components/Header';
import SearchResults from './components/SearchResults'; 
import Recipes from './components/Recipes'; 
import Shopping from './components/Shopping'; 

class App extends Component {
  constructor () {
    super()
    this.state = { 
      recipes: null, 
      currentPosts: null,
      isLoadingSearch: false, 
      numOfResults: 0, 
      currentPage: 1, 
      resultsPerPage: 10
    }
    this.handleClick = this.handleClick.bind(this); 
    this.getCurrentPosts = this.getCurrentPosts.bind(this); 
  }

  async getResults(query) {
    const url = 'https://forkify-api.herokuapp.com/api/search?'; 
    
    try {
      const response = await axios(`${url}q=${query}`);
      console.log('request is working!')
      this.setState({
        isLoadingSearch: false, 
        recipes: response.data.recipes, 
        numOfResults: response.data.recipes.length, 
      });  
      this.setState(prevState => ({
        currentPosts: this.getCurrentPosts()
      }))
      
    } catch (error) {
        this.setState({isLoadingSearch: false});  
        alert(error); 
      }
  }

  getCurrentPosts () {
      const indexOfLastPost = this.state.currentPage * this.state.resultsPerPage; //10
      const indexOfFirstPost = indexOfLastPost - this.state.resultsPerPage; //0
      const currentPosts = this.state.recipes.slice(indexOfFirstPost, indexOfLastPost);
  
      return currentPosts; 
  }

  handleClick (event) {
    this.setState( { isLoadingSearch: true } ); 
    this.getResults(event);   
  }

  render () {
      
    return (
      <div className="container">
         <Header handleClick = {this.handleClick}/>
         <SearchResults 
            spinner = {this.state.isLoadingSearch} 
            results = {this.state.currentPosts}
          />
         <Recipes />
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
