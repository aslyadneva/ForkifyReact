import React, {Component} from 'react';
// import { connect } from 'react-redux';

import Header from './components/Header';
import SearchResults from './components/SearchResults'; 
import Recipes from './components/Recipes'; 
import Shopping from './components/Shopping'; 
import Pagination from './components/Pagination'; 

class App extends Component {
  static defaultProps = { resultsPerPage: 10 }
  constructor () {
    super()

    this.state = { 
      numOfResults: 0, 
      currentPage: 1, 
    }

    // this.handleClick = this.handleClick.bind(this); 
    // this.getCurrentPosts = this.getCurrentPosts.bind(this); 
    // this.handlePageButtonClick = this.handlePageButtonClick.bind(this); 
  }

  // async getResults(query) {
  //   const url = 'https://forkify-api.herokuapp.com/api/search?'; 
    
  //   try {
  //     const response = await axios(`${url}q=${query}`);
  //     this.setState({
  //       isLoadingSearch: false, 
  //       recipes: response.data.recipes, 
  //       numOfResults: response.data.recipes.length, 
  //     });  
  //     this.setState(prevState => ({
  //       currentPosts: this.getCurrentPosts()
  //     }))
      
  //   } catch (error) {
  //       this.setState({isLoadingSearch: false});  
  //       alert(error); 
  //     }
  // }

  // getCurrentPosts () {
  //     let indexOfLastPost = this.state.currentPage * this.props.resultsPerPage; //10 20
  //     console.log(`Index of last post: ${indexOfLastPost}`); 

  //     let indexOfFirstPost = indexOfLastPost - this.props.resultsPerPage; //0 10
  //     console.log(`Index of first post: ${indexOfFirstPost}`); 
  //     let currentPosts = this.state.recipes.slice(indexOfFirstPost, indexOfLastPost);
  
  //     return currentPosts; 
  // }

  // handleClick (event) {
  //   this.setState( { isLoadingSearch: true } ); 
  //   this.getResults(event);   
  // }

  // handlePageButtonClick (event) { 
  //   console.log('I got clicked'); 
  //   let btn = event.target.closest('.btn-inline').textContent; 
  //   if (btn.includes("2")) {
  //     this.setState( {currentPage: 2 }, () => {
  //       this.setState({currentPosts: this.getCurrentPosts()})
  //     } );
  //   } else if (btn.includes("3")) {
  //     this.setState( {currentPage: 3 }, () => {
  //       this.setState({currentPosts: this.getCurrentPosts()})
  //     } );
  //   } else if (btn.includes("1")) {
  //     this.setState( {currentPage: 1 }, () => {
  //       this.setState({currentPosts: this.getCurrentPosts()})
  //     } );
  //   }   
  // }

  render () {
      
    return (
      <div className="container">
         <Header/>
         <SearchResults 
            // pagination = {
            //   <Pagination 
            //     totalPosts = {this.state.numOfResults} 
            //     postsPerPage = {this.props.resultsPerPage}
            //     page = {this.state.currentPage}
            //     handlePageButtonClick = {this.handlePageButtonClick}
            //   />
            // }
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
