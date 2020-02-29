import React, { Component } from 'react'; 


class ResultsButton extends Component {

  render () { 
    return (
      <button 
        onClick = {this.props.handleClick} 
        className = {`btn-inline results__btn--${this.props.type}`} 
      >
        <span>Page {this.props.number}</span>
        <svg className="search__icon">
          <use 
            href = {`img/icons.svg#icon-triangle-${this.props.direction}`}
          >
          </use>
        </svg> 
      </button> 
    ); 
  }
}

export default ResultsButton; 