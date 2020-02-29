import React, {Component, Fragment} from 'react';
import ResultsButton from './ResultsButton'; 
import { connect } from 'react-redux';
import { nextPage, prevPage } from '../actions'; 


class Pagination extends Component {

  handlePageButtonClick = (event) => { 
   
      let btn = event.target.closest('.btn-inline').textContent; 

      if (btn.includes("2") && this.props.currentPage === 3) {
        this.props.prevPage()
      }
      else if (btn.includes("2")) {
        this.props.nextPage()
      } 
      else if (btn.includes("3")) {
        this.props.nextPage()
      } 
      else if (btn.includes("1")) {
        this.props.prevPage()
      }   
  }
  
  renderButton () {
    const { currentPage, pages } = this.props; 
    if (currentPage === 1 && pages > 1) { //if on page 1
      return (
        <ResultsButton number = {currentPage + 1} type = "next" handleClick = {this.handlePageButtonClick} direction = 'right'/>
      );
    } else if (currentPage < pages) { //if on page 2
      return (
        <Fragment>
          <ResultsButton number = {currentPage - 1} type ='prev' handleClick = {this.handlePageButtonClick} direction = 'left'/>
          <ResultsButton number = {currentPage + 1} type="next" handleClick={this.handlePageButtonClick} direction = 'right'/>
        </Fragment>
      );     
    } else if (currentPage === pages && pages > 1){ //if on page 3 
      return (
        <ResultsButton number = {currentPage - 1} type='prev' handleClick={this.handlePageButtonClick} direction = 'left'/>);
    }      
  }

  render() {
    return (
      <div className="results__pages">
       {this.renderButton()}
      </div>
    );
  }  
}

const mapStateToProps = state => {
  return { recipes: state.results.recipes, currentPage: state.currentPage }
}

export default connect (mapStateToProps, { nextPage, prevPage })(Pagination); 